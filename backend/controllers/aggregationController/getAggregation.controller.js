import { Resource } from "../../models/ResourceModel/resourceModel.js";
  const getAggregatedData = async (req, res) => {
    console.log("getAggregatedData  Called");
    try {
      // Sample aggregation: Group resources by status and count

  const result = await Resource.aggregate([
    // -------------------- ResourceDemandInfo --------------------
    {
      $lookup: {
        from: "resourcedemandinfos",
        localField: "resourceDemandInfoId",
        foreignField: "_id",
        as: "resourceDemandInfo"
      }
    },
    { $unwind: "$resourceDemandInfo" },

    // -------------------- Lead --------------------
    {
      $lookup: {
        from: "leads",
        localField: "resourceDemandInfo.leadId",
        foreignField: "_id",
        as: "lead"
      }
    },
    { $unwind: { path: "$lead", preserveNullAndEmptyArrays: true } },

    // -------------------- Client --------------------
    {
      $lookup: {
        from: "clients",
        localField: "lead.clientId",
        foreignField: "_id",
        as: "client"
      }
    },
    { $unwind: { path: "$client", preserveNullAndEmptyArrays: true } },

    // -------------------- Resumes --------------------
    {
      $lookup: {
        from: "resumes",
        localField: "resumesOfThisResource",
        foreignField: "_id",
        as: "allResumes"
      }
    },

    // -------------------- Derived Fields --------------------
    {
      $addFields: {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" },
        clientId: "$client.clientId",
        leadId: { $ifNull: ["$lead.leadId", "NA"] },
        noOfResource: "$resourceDemandInfo.noOfResource"
      }
    },

    // -------------------- Unwind resumes for counting --------------------
    {
      $unwind: { path: "$allResumes", preserveNullAndEmptyArrays: true }
    },

    // -------------------- RESOURCE-LEVEL GROUP --------------------
    {
      $group: {
        _id: {
          resourceId: "$_id",
          year: "$year",
          month: "$month",
          clientId: "$clientId",
          leadId: "$leadId"
        },

        demandAdded: { $first: "$noOfResource" },

        resumes: {
          $push: {
            _id: "$allResumes._id",
            status: "$allResumes.resumeStatus"
          }
        },

        pending: {
          $sum: { $cond: [{ $eq: ["$allResumes.resumeStatus", "Pending"] }, 1, 0] }
        },

        keepOnHold: {
          $sum: { $cond: [{ $eq: ["$allResumes.resumeStatus", "Hold"] }, 1, 0] }
        },

        fulfilled: {
          $sum: { $cond: [{ $eq: ["$allResumes.resumeStatus", "Fullfilled"] }, 1, 0] }
        },

        rejected: {
          $sum: { $cond: [{ $eq: ["$allResumes.resumeStatus", "Rejected"] }, 1, 0] }
        }
      }
    },

    // -------------------- MONTH + CLIENT + LEAD --------------------
    {
      $group: {
        _id: {
          year: "$_id.year",
          month: "$_id.month",
          clientId: "$_id.clientId",
          leadId: "$_id.leadId"
        },

        demandAdded: { $sum: "$demandAdded" },
        pending: { $sum: "$pending" },
        keepOnHold: { $sum: "$keepOnHold" },
        fulfilled: { $sum: "$fulfilled" },
        rejected: { $sum: "$rejected" }
      }
    },

    // -------------------- Derived Metric --------------------
    {
      $addFields: {
        couldNotFulfill: {
          $max: [{ $subtract: ["$demandAdded", "$fulfilled"] }, 0]
        }
      }
    },

    // -------------------- CLIENT MONTH SUMMARY --------------------
    {
      $group: {
        _id: {
          year: "$_id.year",
          month: "$_id.month",
          clientId: "$_id.clientId"
        },

        demandAdded: { $sum: "$demandAdded" },

        leads: {
          $push: {
            leadId: "$_id.leadId",
            demandCount: "$demandAdded"
          }
        },

        pending: { $sum: "$pending" },
        keepOnHold: { $sum: "$keepOnHold" },
        fulfilled: { $sum: "$fulfilled" },
        rejected: { $sum: "$rejected" },
        couldNotFulfill: { $sum: "$couldNotFulfill" }
      }
    },

    // -------------------- Final Projection --------------------
    {
      $project: {
        _id: 0,
        month: {
          $concat: [
            {
              $arrayElemAt: [
                ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                { $subtract: ["$_id.month", 1] }
              ]
            },
            "-",
            { $substr: ["$_id.year", 2, 2] }
          ]
        },
        clientId: "$_id.clientId",
        demandAdded: 1,
        leads: 1,
        status: {
          pending: "$pending",
          keepOnHold: "$keepOnHold",
          fulfilled: "$fulfilled",
          rejected: "$rejected",
          couldNotFulfill: "$couldNotFulfill"
        }
      }
    }
  ]);

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error("Aggregation Error:", error);
      res.status(500).json({
        success: false,
        message: "Server Error during aggregation",
      });
    }
  };

  const dashboardStatsController = async (req, res) => {
    console.log("Dashboard Stats Controller Called");
    try {
      // Your aggregation logic here 
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      const endOfToday = new Date();
      endOfToday.setHours(23, 59, 59, 999);

    {//  const result =  await Resource.aggregate([
    //     {
    //       $lookup: {
    //         from: "resumes",
    //         localField: "_id",
    //         foreignField: "resourceModelId",
    //         as: "resumes"
    //       }
    //     },

    //     {
    //       $addFields: {
    //         isToday: {
    //           $and: [
    //             { $gte: ["$createdAt", startOfToday] },
    //             { $lte: ["$createdAt", endOfToday] }
    //           ]
    //         }
    //       }
    //     },

    //     {
    //       $unwind: {
    //         path: "$resumes",
    //         preserveNullAndEmptyArrays: true
    //       }
    //     },

    //     // {
    //     //   $group: {
    //     //     _id: "$_id",

    //     //     demandCount: {
    //     //       $first: "$resourceDemandInfoI.noOfResource"
    //     //     },

    //     //     newRequirement: {
    //     //       $first: {
    //     //         $cond: ["$isToday", "$resourceDemandInfo.noOfResource", 0]
    //     //       }
    //     //     },

    //     //     replacement: {
    //     //       $first: {
    //     //         $cond: [
    //     //           { $eq: ["$resourceDemandInfo.demandType", "Replacement"] },
    //     //           "$resourceDemandInfo.noOfResource",
    //     //           0
    //     //         ]
    //     //       }
    //     //     },

    //     //     interviewSelection: {
    //     //       $sum: {
    //     //         $cond: [{ $eq: ["$resumes.resumeStatus", "Fulfilled"] }, 1, 0]
    //     //       }
    //     //     }
    //     //   }
    //     // },

    //     // {
    //     //   $group: {
    //     //     _id: null,

    //     //     totalDemand: { $sum: "$demandCount" },
    //     //     newRequirement: { $sum: "$newRequirement" },
    //     //     replacement: { $sum: "$replacement" },
    //     //     interviewSelection: { $sum: "$interviewSelection" }
    //     //   }
    //     // },

    //     // {
    //     //   $project: {
    //     //     _id: 0,
    //     //     totalDemand: 1,
    //     //     newRequirement: 1,
    //     //     replacement: 1,
    //     //     interviewSelection: 1
    //     //   }
    //     // }
    //   ]);
    }
    const result = await Resource.aggregate([

      /* 1️⃣ Lookup resumes */
      {
        $lookup: {
          from: "resumes",
          localField: "_id",
          foreignField: "resourceModelId",
          as: "resumes"
        }
      },

      /* 2️⃣ Lookup demand info */
      {
        $lookup: {
          from: "resourcedemandinfos",
          localField: "resourceDemandInfoId",
          foreignField: "_id",
          as: "demandInfo"
        }
      },
      { $unwind: "$demandInfo" },

      /* 3️⃣ Detect today’s requirement */
      {
        $addFields: {
          isToday: {
            $eq: [
              { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
              { $dateToString: { format: "%Y-%m-%d", date: new Date() } }
            ]
          }
        }
      },

      /* 4️⃣ Resume-level unwind (needed only for counting fulfilled) */
      {
        $unwind: {
          path: "$resumes",
          preserveNullAndEmptyArrays: true
        }
      },

      /* 5️⃣ GROUP BACK TO RESOURCE LEVEL */
      {
        $group: {
          _id: "$_id",
          
          noOfResource: { $first: "$demandInfo.noOfResource" },
          isToday: { $first: "$isToday" },

          demandType: { $first: "$demandInfo.demandType" },

          /* Count fulfilled resumes per resource */
          fulfilledCount: {
            $sum: {
              $cond: [
                { $eq: ["$resumes.resumeStatus", "Fullfilled"] },
                1,
                0
              ]
            }
          }
        }
      },

      /* 6️⃣ FINAL DASHBOARD TOTALS */
      {
        $group: {
          _id: null,

          totalDemand: { $sum: "$noOfResource" },

          newRequirement: {
            $sum: { $cond: ["$isToday", 1, 0] }
          },

          replacement: {
            $sum: {
              $cond: [
                { $eq: ["$demandType", "Replacement"] },
                1,
                0
              ]
            }
          },

          interviewSelection: { $sum: "$fulfilledCount" }
        }
      },

      /* 7️⃣ Clean response */
      {
        $project: {
          _id: 0,
          totalDemand: 1,
          newRequirement: 1,
          replacement: 1,
          interviewSelection: 1
        }
      }
    ]);

      res.status(200).json({
        success: true,
        data: result, // Replace with actual data
      });
    
    } catch (error) {
      console.error("Dashboard Stats Error:", error);
      res.status(500).json({
        success: false,
        message: "Server Error fetching dashboard stats",
      });
    }
  };

  const getFlowChartData = async (req, res) => {
    console.log("Get Flow Chart Data Called");
    try {
      // Your aggregation logic here
    const result = await Resource.aggregate([
    /* 0️⃣ Filter last 6 months */
    {
      $match: {
        createdAt: {
          $gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
        }
      }
    },

    /* 1️⃣ Lookup demand info */
    {
      $lookup: {
        from: "resourcedemandinfos",
        localField: "resourceDemandInfoId",
        foreignField: "_id",
        as: "demandInfo"
      }
    },
    { $unwind: "$demandInfo" },

    /* 2️⃣ Lookup resumes */
    {
      $lookup: {
        from: "resumes",
        localField: "_id",
        foreignField: "resourceModelId",
        as: "resumes"
      }
    },

    /* 3️⃣ Extract month number */
    {
      $addFields: {
        monthNumber: { $month: "$createdAt" }
      }
    },

    /* 4️⃣ Group by month */
    {
      $group: {
        _id: "$monthNumber",

        Added: {
          $sum: { $ifNull: ["$demandInfo.noOfResource", 0] }
        },

        Pending: {
          $sum: {
            $size: {
              $filter: {
                input: "$resumes",
                as: "resumes",
                cond: { $eq: ["$$resumes.resumeStatus", "Pending"] }
              }
            }
          }
        },

        Fulfilled: {
          $sum: {
            $size: {
              $filter: {
                input: "$resumes",
                as: "resumes",
                cond: { $eq: ["$$resumes.resumeStatus", "Fullfilled"] }
              }
            }
          }
        },

        "Kept on hold": {
          $sum: {
            $size: {
              $filter: {
                input: "$resumes",
                as: "resumes",
                cond: { $eq: ["$$resumes.resumeStatus", "Hold"] }
              }
            }
          }
        },

        "Inactive Closed": {
          $sum: {
            $size: {
              $filter: {
                input: "$resumes",
                as: "resumes",
                cond: { $eq: ["$$resumes.resumeStatus", "Rejected"] }
              }
            }
          }
        }
      }
    },

    /* 5️⃣ Derived field */
    {
      $addFields: {
        "Could Not fulfill": {
          $subtract: ["$Added", "$Fulfilled"]
        }
      }
    },

    /* 6️⃣ Sort chronologically */
    {
      $sort: { "_id": 1 }
    },

    /* 7️⃣ Convert month number → month name */
    {
      $addFields: {
        month: {
          $arrayElemAt: [
            ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "$_id"
          ]
        }
      }
    },

    /* 8️⃣ Final output */
    {
      $project: {
        _id: 0,
        month: 1,
        Added: 1,
        Pending: 1,
        Fulfilled: 1,
        "Kept on hold": 1,
        "Inactive Closed": 1,
        "Could Not fulfill": 1
      }
    }
    ]);


      res.status(200).json({
        success: true,
        data: result, // Replace with actual data
      });
    } catch (error) {
      console.error("Flow Chart Data Error:", error);
      res.status(500).json({
        success: false,
        message: "Server Error fetching flow chart data",
      });
    }
  };
export { getAggregatedData, dashboardStatsController , getFlowChartData };