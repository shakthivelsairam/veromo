import express, {Request, Response} from "express";
import * as testModel  from "../models/testData";
import {testCode, testData} from "../types/testData";
const testRouter = express.Router();

testRouter.get("/:id", async (req: Request, res: Response) => {

    const testCode: string =req.params.id;
    
   
    testModel.fetchData(testCode,(err: Error, testDatas: testData[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }
    if (testDatas.length==0)
    {
        res.status(200).json({"status":201,"msg":"No R45asdecords found"});
    }
    else
    {
        res.status(200).json({"status":400, "msg": testDatas});
    }
  });
});
testRouter.get("/",async (req: Request, res: Response) => {
  testModel.fetchAllTests((err:Error, testDatas: testData[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }
    if (testDatas.length==0)
    {
        res.status(200).json({"status":201,"msg":"No Records found"});
    }
    else
    {
      res.status(200).json({"status":400, "msg": testDatas});
    }
  })
});
export {testRouter};