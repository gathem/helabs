var express = require('express');
var router = express.Router();

/* GET quiz data. */
router.get('/', function(req, res) {
  res.send([
	  {
	    "question":"What kind of nuts are especially high in selenium (necessary for the body but toxic in high amounts)?",
	    "answera":"Brazil nuts",
	    "answerb":"Almonds",
	    "answerc":"Cashews",
	    "answerd":"Pistachios",
	    "answere":"Walnuts",
	    "correct":0,
	    "referencelink":"http://ajcn.nutrition.org/content/87/2/379.long"
	  },
	  {
	    "question":"What time of the day is the average man's testosterone at the daily peak?",
	    "answera":"2:00 AM",
	    "answerb":"7:00 AM",
	    "answerc":"9:00 AM",
	    "answerd":"12:00 PM",
	    "answere":"5:00 PM",
	    "correct":1,
	    "referencelink":"http://jcem.endojournals.org/content/37/3/366.abstract"
	  },
	  {
	    "question":"Which kind of milk has the highest amount of protein per ounce?",
	    "answera":"Low fat cow milk",
	    "answerb":"Soy milk",
	    "answerc":"Almond milk",
	    "answerd":"Goat milk",
	    "answere":"Coconut milk",
	    "correct":3,
	    "referencelink":"http://www.livescience.com/14948-skinny-milk-nutrition-goat-rice-soy.html"
	  },
	  {
	    "question":"Which of the following is typically calculated from other markers as opposed to actually measured?",
	    "answera":"LDL",
	    "answerb":"HDL",
	    "answerc":"Triglycerides",
	    "answerd":"Cholesterol",
	    "answere":"Vitamin D",
	    "correct":0,
	    "referencelink":"http://cholesterol.about.com/od/gettingtested/f/calculateldl.htm"
	  },
	  {
	    "question":"Which one is *not* a typical Crossfit workout?",
	    "answera":"Fran",
	    "answerb":"Murph",
	    "answerc":"Kalsu",
	    "answerd":"Linda",
	    "answere":"Insanity",
	    "correct":4,
	    "referencelink":"http://forum.crossfitbrandx.com/index.php/forums/viewthread/11204/"
	  },
	  {
	    "question":"Which kind of alcohol has the lowest sugar content?",
	    "answera":"Wine",
	    "answerb":"Beer",
	    "answerc":"Vodka",
	    "answerd":"Gin Tonic",
	    "answere":"Whiskey Soda",
	    "correct":2,
	    "referencelink":"http://www.livestrong.com/article/304645-how-many-carbs-calories-in-vodka/"
	  },
	  {
	    "question":"Which one is *not* a common supplement?",
	    "answera":"BCAA",
	    "answerb":"Acetaminophen",
	    "answerc":"Glutamine",
	    "answerd":"Vitamin D",
	    "answere":"GABA",
	    "correct":1,
	    "referencelink":"http://www.medicinenet.com/acetaminophen/article.htm"
	  },
	  {
	    "question":"What is the number one killer of women in the US?",
	    "answera":"Breast Cancer",
	    "answerb":"Stroke",
	    "answerc":"Heart Disease / Heart Attack",
	    "answerd":"Diabetes",
	    "answere":"Complications related to hip fracture",
	    "correct":2,
	    "referencelink":"http://www.cdc.gov/women/lcod/2010/index.htm"
	  },
	  {
	    "question":"What is the most effective way to get lycopene from tomatoes?",
	    "answera":"Raw tomatoes",
	    "answerb":"Tomato juice",
	    "answerc":"Cooked tomatoes",
	    "answerd":"Ketchup",
	    "answere":"Canned tomatoes",
	    "correct":2,
	    "referencelink":"http://www.sciencedaily.com/releases/2002/04/020422073341.htm"
	  },
	  {
	    "question":"What level of fasting blood glucose would be considered dangerous? (in mg/dL)",
	    "answera":"50",
	    "answerb":"60",
	    "answerc":"70",
	    "answerd":"80",
	    "answere":"90",
	    "correct":0,
	    "referencelink":"http://medicalcenter.osu.edu/heart/prevention/pages/diabetes-and-heart-disease.aspx"
	  },
	  {
	    "question":"What is the highest VO2 max ever recorded? (in mL/(kgÂ·min))",
	    "answera":"37.5",
	    "answerb":"57.5",
	    "answerc":"77.5",
	    "answerd":"97.5",
	    "answere":"117.5",
	    "correct":3,
	    "referencelink":"http://www.topendsports.com/testing/records/vo2max.htm"
	  },
	  {
	    "question":"What is the FDA daily recommended allowance for sugar?",
	    "answera":"10 grams",
	    "answerb":"20 grams",
	    "answerc":"30 grams",
	    "answerd":"40 grams",
	    "answere":"There is no recommended allowance",
	    "correct":4,
	    "referencelink":"http://www.livestrong.com/article/448978-fda-recommended-sugar-intake/"
	  },
	  {
	    "question":"Glycemic Index is a measure of",
	    "answera":"Amount of sugar per serving",
	    "answerb":"Amount of sugar made available to the body",
	    "answerc":"Change in blood sugar level",
	    "answerd":"Rate of change of blood sugar level",
	    "answere":"Change in fasting blood sugar level",
	    "correct":3,
	    "referencelink":"http://www.fitday.com/fitness-articles/fitness/what-is-the-glycemic-index-and-what-does-it-mean-for-your-health.html"
	  },
	  {
	    "question":"What is your level of visceral fat NOT linked to?",
	    "answera":"Diabetes",
	    "answerb":"Metabolic Syndrome",
	    "answerc":"CVD",
	    "answerd":"Intestinal Cancer",
	    "answere":"None of the above",
	    "correct":4,
	    "referencelink":"http://health.yahoo.net/articles/obesity/why-men-should-be-concerned-about-belly-fat"
	  },
	  {
	    "question":"Gluten is a",
	    "answera":"protein",
	    "answerb":"carb",
	    "answerc":"sugar",
	    "answerd":"fat",
	    "answere":"nucleic acid",
	    "correct":0,
	    "referencelink":"http://health.usnews.com/health-news/blogs/eat-run/2012/07/24/what-is-gluten-anyway"
	  }
	]);
});

module.exports = router;
