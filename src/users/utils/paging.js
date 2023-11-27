export const getSkip = (page, limit) => {
  const page = req.query.page ?? '1';
  const limit = req.puery.limit ?? '20';
  const take = Number(limit) || 20;
  const skip = (Number(page) - 1) * take;
  
    req.take = take;
    req.skip = skip;

    req = {
        headers; {};
        body : {};
    }

  next();
};
