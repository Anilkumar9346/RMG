import mongoose from "mongoose";
import { UserModel } from "./userModel.js";


export const login = async (req,res)=>{

    const {email,password} = req.body
	try{
         
		let user = await UserModel.findOne({email});
		if(!user){
			return res.status(404).json({success:false,message:"User is not registered"});
		}

		if(password===user.password){
			return res.status(200).json({success:true,message:"Password Matched,!! Login completed"})
		}
		return res.status(404).json({success:false,message:"Invalid Credentials"})

	}
	catch(err){
		return res.status(400).json({success:false,message:"Something Went Wrong"})
	}


}













