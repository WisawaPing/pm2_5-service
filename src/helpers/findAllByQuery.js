export default async (req, db, arrKeyInclude = [], orderBy = "DESC") => {
  let result;

  // console.log("arrKeyInclude", arrKeyInclude);

  const include = arrKeyInclude;

  if (Object.keys(req.query).length > 0) {
    const where = {};
    Object.keys(req.query).forEach((key) => {
      if (key != "offset" && key != "limit") {
        if (req.query[key] != "") {
          where[key] = req.query[key];
        }
      }
    });
    // console.log(where);
    result = await db.findAll({
      // include: arrKeyInclude,
      include,
      where,
      order: [
        ["createdAt", orderBy],
        ["id", orderBy],
      ],
    });
    if (result.length > 0) {
      if (result[0].status) {
        const newResult = result.filter((data) => data.status != "SAVE DRAFT");
        if (req.query.userId) {
          return result;
        }
        return newResult;
      }
      return result;
    } else {
      return false;
    }
  } else {
    result = await db.findAll({
      // include: arrKeyInclude,
      include,
      order: [
        ["createdAt", orderBy],
        ["id", orderBy],
      ],
    });

    if (result.length > 0) {
      if (result[0].status) {
        const newResult = result.filter((data) => data.status != "SAVE DRAFT");
        if (req.query.userId) {
          return result;
        }
        return newResult;
      }

      return result;
    } else {
      return [];
    }
  }
};
