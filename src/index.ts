const handler: AWSLambda.Handler<AWSLambda.SESEvent> = async (
  event,
  context
) => {
  return { event, context, statusCode: 200 };
};

export default handler;
