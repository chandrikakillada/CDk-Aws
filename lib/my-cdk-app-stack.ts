import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

import * as apigw from "aws-cdk-lib/aws-apigateway";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    //    const helloFn = new lambda.Function(this, "HelloHandler", {
    //   runtime: lambda.Runtime.NODEJS_20_X,
    //   code: lambda.Code.fromAsset("lambda"), // folder where handler.js lives
    //   handler: "handler.handler",
    // });

    const helloFn = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "handler.handler",
    });

    new apigw.LambdaRestApi(this, "EndPoint", {
      handler: helloFn,
    });
  }
}
