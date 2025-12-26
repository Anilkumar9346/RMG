import {
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsV2Command,
    DeleteObjectCommand,
    DeleteObjectsCommand
} from "@aws-sdk/client-s3";

import { s3 } from "../../config/s3config.js";


/* =========================
   UPLOAD DATA / FILE
========================= */

export const uploadData = async ({
    bucketName,
    key,
    data,
    contentType
}) => {
    try {
        const putObjectCommand = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: JSON.stringify(data),
            ContentType: contentType
        })
        let res = await s3.send(putObjectCommand);
        console.log('res', res)
        return {
            success: true,
            message: "Data uploaded successfully",
            key
        };
    } catch (error) {
        console.log(error)
        throw new Error(`Upload failed: ${error.message}`);
    }
};



/* =========================
   GET FILE (STREAM)
========================= */
export const getFile = async ({ bucketName, key }) => {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const response = await s3.send(command);

    return {
      success: true,
      body: response.Body, // Readable stream
      contentType: response.ContentType,
    };
  } catch (error) {
    console.error("Get file error:", error);
    throw new Error(`Get file failed: ${error.message}`);
  }
};

/* =========================
   LIST ALL FILES
========================= */
export const listFiles = async ({ bucketName, prefix = "" }) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix, // optional folder path
    });

    const response = await s3.send(command);

    return {
      success: true,
      files:
        response.Contents?.map((item) => ({
          key: item.Key,
          size: item.Size,
          lastModified: item.LastModified,
        })) || [],
    };
  } catch (error) {
    console.error("List files error:", error);
    throw new Error(`List files failed: ${error.message}`);
  }
};

/* =========================
   DELETE SINGLE FILE
========================= */
export const deleteFile = async ({ bucketName, key }) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3.send(command);

    return {
      success: true,
      message: "File deleted successfully",
      key,
    };
  } catch (error) {
    console.error("Delete file error:", error);
    throw new Error(`Delete failed: ${error.message}`);
  }
};

/* =========================
   DELETE MULTIPLE FILES
========================= */
export const deleteMultipleFiles = async ({ bucketName, keys }) => {
  try {
    const command = new DeleteObjectsCommand({
      Bucket: bucketName,
      Delete: {
        Objects: keys.map((key) => ({ Key: key })),
        Quiet: false,
      },
    });

    const response = await s3.send(command);

    return {
      success: true,
      deleted: response.Deleted || [],
      errors: response.Errors || [],
    };
  } catch (error) {
    console.error("Delete multiple files error:", error);
    throw new Error(`Bulk delete failed: ${error.message}`);
  }
};