import db from "~/models";
const LifeLongLearningBanner = db.LifeLongLearningBanner;

exports.getBanner = async (req, res) => {
  try {
    const banner = await LifeLongLearningBanner.findOne();
    res.json(banner || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.saveBanner = async (req, res) => {
  try {
    const { bannerText, bannerImage } = req.body;

    let banner = await LifeLongLearningBanner.findOne();

    if (banner) {
      banner.bannerText = bannerText;
      banner.bannerImage = bannerImage;
      await banner.save();
    } else {
      banner = await LifeLongLearningBanner.create({
        bannerText,
        bannerImage,
      });
    }

    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
