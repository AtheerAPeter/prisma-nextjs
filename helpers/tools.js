const resError = (res, error, status = 400) => {
  console.log(error);

  let response = { status: false, error };
  res.statusCode = status;
  return res.json(response);
};

const resData = (res, data, status = 200) => {
  let response = { status: true, data };
  res.statusCode = status;
  return res.json(response);
};

const parseErrors = (obj) => {
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    let errors = [];
    keys.forEach((key) => errors.push(obj[key][0]));
    console.log(errors);

    return errors;
  }
};

const paginate = (p = 1, s = 10) => {
  let take = Number(s);
  let skip = (p - 1) * take;
  return { take, skip };
};

export { resError, resData, parseErrors, paginate };
