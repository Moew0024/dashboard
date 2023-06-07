import OverallStat from "../models/OverallStat.js";
const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status.json({ message: error.message });
  }
};
export default getSales;
