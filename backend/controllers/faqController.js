import FaqModel from "../models/FaqModel.js";

const addfaq = async (req, res) => {
  const Faq = new FaqModel({
    CityName: req.body.CityName,
    Question: req.body.Question,
    Answer: req.body.Answer,
  });

  try {
    await Faq.save();
    res.json({ success: true, message: "Faq Added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const listFaq = async (req, res) => {
  try {
    const Cityfaq = req.query.name;

    let filter = {};

    if (Cityfaq) {
      filter = { name: { $regex: new RegExp(Cityfaq, "i") } };
    }
    const city = await FaqModel.find(filter);
      res.json({ success: true, data:city });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFaq = async (req, res) => {
    try {
        await FaqModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Faq deleted successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { addfaq, listFaq, removeFaq };
