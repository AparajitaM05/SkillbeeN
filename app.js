const express = require("express");
const axios = require("axios");
const path = require('path');
const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);

const app = express();
const port = 3000;

app.use(express.static("public"));
// Serve static files from the "public" directory (where your index.html is located)
app.use(express.static(path.join(__dirname, '')));
// Function to fetch data from the API
async function getApiData() {
  const apiUrl = "https://www.boredapi.com/api/activity"; // Replace this with the actual API endpoint URL
  try {
    const response = await axios.get(apiUrl);
    if (response.status === 200) {
      // console.log("API SUCCESS");
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return null;
  }
}

// app.use('/Assets', express.static('public'))

// Generate dynamic pages using Express route
app.get("/page", async (req, res) => {
  const numPages = 10;
  const pages = [];

  for (let i = 0; i < numPages; i++) {
    const data  = await getApiData();
    if (data) {
      pages.push(data);
      // console.log(data)
    }
  }

  const pageTemplate = `
  <!DOCTYPE html>
  <html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link to your CSS file -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
<div class="HeroSection" style="width: 1440px; height: 1118px; position: relative; background: white">
<div class="Backpack" style="width: 351px; height: 349px; left: 1092px; top: 435px; position: absolute; border: 0.50px white solid"></div>
<div class="Image13" style="width: 772px; height: 150px; left: 0px; top: 968px; position: absolute; background: #2B2B35"></div>
<div class="Image14" style="width: 1440px; height: 156px; left: 0px; top: 962px; position: absolute; background: #2B2B35"></div>
<div class="Image15" style="width: 1440px; height: 156px; left: 0px; top: 962px; position: absolute; background: #2B2B35"></div>
<div class="Frame6" style="left: 80px; top: 1010px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 119px; display: inline-flex">
  <div class="Group33119" style="position: relative">
    <div class="VuesaxTwotoneCardSend" style="width: 60px; height: 60px; left: 0px; top: 0px; position: absolute; justify-content: center; align-items: center; display: inline-flex">
      <div class="CardSend" style="width: 60px; height: 60px; position: relative">
        <div class="Vector" style="width: 31.25px; height: 0px; left: 5px; top: 21.25px; position: absolute; border: 1.50px white solid"></div>
        <div class="Vector" style="width: 5px; height: 0px; left: 15px; top: 41.25px; position: absolute; border: 1.50px white solid"></div>
        <div class="Vector" style="width: 10px; height: 0px; left: 26.25px; top: 41.25px; position: absolute; border: 1.50px white solid"></div>
        <div class="Vector" style="width: 50px; height: 42.50px; left: 5px; top: 8.75px; position: absolute; border: 1.50px white solid"></div>
        <div class="Group569" style="width: 10px; height: 15px; left: 45px; top: 8.75px; position: absolute">
          <div class="Vector" style="width: 5px; height: 15px; left: 5px; top: 0px; position: absolute; border: 1.50px #D93A31 solid"></div>
          <div class="Vector" style="width: 5px; height: 5px; left: 0px; top: 0px; position: absolute; border: 1.50px #D93A31 solid"></div>
        </div>
        <div class="Vector" style="width: 60px; height: 60px; left: 0px; top: 0px; position: absolute; opacity: 0"></div>
      </div>
    </div>
    <div class="Group33117" style="width: 162px; height: 47px; left: 80px; top: 7px; position: absolute">
      <div class="Accessibility" style="left: 0px; top: 0px; position: absolute; color: #B5B5C2; font-size: 14px; font-family: Lexend Deca; font-weight: 400; text-transform: uppercase; line-height: 14px; word-wrap: break-word">accessibility</div>
      <div class="32" style="width: 162px; height: 24px; left: 0px; top: 23px; position: absolute; color: white; font-size: 24px; font-family: Lexend Deca; font-weight: 700; text-transform: uppercase; line-height: 100px; word-wrap: break-word">{{ accessibility }}</div>
    </div>
  </div>
  <div class="Group33118" style="width: 225px; height: 60px; position: relative">
    <div class="VuesaxTwotoneShieldTick" style="width: 60px; height: 60px; left: 0px; top: 0px; position: absolute; justify-content: center; align-items: center; display: inline-flex">
      <div class="ShieldTick" style="width: 60px; height: 60px; position: relative">
        <div class="Vector" style="width: 43px; height: 49.99px; left: 8.53px; top: 4.99px; position: absolute; border: 1.50px white solid"></div>
        <div class="Vector" style="width: 14.77px; height: 10.75px; left: 22.62px; top: 22.95px; position: absolute; border: 1.50px #D93A31 solid"></div>
        <div class="Vector" style="width: 60px; height: 60px; left: 60px; top: 60px; position: absolute; transform: rotate(-180deg); transform-origin: 0 0; opacity: 0"></div>
      </div>
    </div>
    <div class="Group33117" style="width: 145px; height: 52px; left: 80px; top: 2px; position: absolute">
      <div class="Type" style="width: 71px; height: 24px; left: 0px; top: 0px; position: absolute; color: #B5B5C2; font-size: 14px; font-family: Lexend Deca; font-weight: 400; text-transform: uppercase; line-height: 14px; word-wrap: break-word">Type</div>
      <div class="Social" style="width: 145px; height: 24px; left: 0px; top: 28px; position: absolute; color: white; font-size: 24px; font-family: Lexend Deca; font-weight: 700; text-transform: uppercase; line-height: 100px; word-wrap: break-word">{{ type }} </div>
    </div>
  </div>
</div>
<img class="ActivityStock1" style="width: 334.50px; height: 666.98px; left: 772px; top: 295px; position: absolute" src="One.png"/>
<img class="ActivityStock2" style="width: 334px; height: 334px; left: 1106px; top: 784px; position: absolute" src="Two.png" />
<div class="Frame10" style="left: 1286px; top: 72px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-end; display: inline-flex">
  <div class="Price" style="color: #9497A8; font-size: 20px; font-family: Lexend Deca; font-weight: 400; text-transform: uppercase; line-height: 40px; word-wrap: break-word">Price</div>
  <div class="1" style="color: black; font-size: 20px; font-family: Lexend Deca; font-weight: 400; text-transform: uppercase; line-height: 40px; word-wrap: break-word">{{ price }}</div>
</div>
<div class="Backpack" style="width: 196px; height: 196px; left: 1175px; top: 520px; position: absolute">
  <div class="Ellipse241" style="width: 196px; height: 196px; left: 0px; top: 0px; position: absolute; opacity: 0.10; background: white; border-radius: 9999px"></div>
  <div class="Ellipse242" style="width: 150px; height: 150px; left: 23px; top: 23px; position: absolute; opacity: 0.10; background: white; border-radius: 9999px"></div>
  <img class="Image14" style="width: 169px; height: 169px; left: 14px; top: 13px; position: absolute; border-radius: 1000px; border: 2px solid" src="new.png" />
</div>
<div class="Logogroup" style="width: 100px; height: 100px; left: 1056px; top: 734px; position: absolute">
  <div class="Rectangle8857" style="width: 100px; height: 100px; left: 0px; top: 0px; position: absolute; background: #D93A31; border-radius: 1000px"></div>
  <div class="Group" style="width: 77px; height: 26.63px; left: 12px; top: 63.63px; position: absolute">
    <div class="Vector" style="width: 3.52px; height: 3.52px; left: 69.86px; top: -23.10px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 2.57px; height: 2.58px; left: 74.43px; top: -24.05px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 1.15px; height: 1.37px; left: 75.12px; top: -24.62px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 22.88px; height: 18.30px; left: 33.48px; top: -5.72px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 28.55px; height: 18.17px; left: 0.15px; top: -5.78px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 20.62px; height: 12.12px; left: 51.83px; top: -10.18px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 4.06px; height: 7.43px; left: 69.13px; top: -14.87px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 16.79px; height: 8.85px; left: 15.43px; top: -5.78px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 4.61px; height: 4.47px; left: 0px; top: -0.01px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.90px; height: 4.49px; left: 7.14px; top: 0px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.93px; height: 4.46px; left: 13.57px; top: -0.01px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.95px; height: 4.44px; left: 20.07px; top: -0.05px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 4.55px; height: 4.48px; left: 26.55px; top: -0.01px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 4.58px; height: 4.44px; left: 33.66px; top: -0.05px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.95px; height: 4.48px; left: 40.78px; top: -0px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.97px; height: 4.42px; left: 50.22px; top: -0.05px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.98px; height: 4.45px; left: 56.50px; top: -0.02px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.90px; height: 4.47px; left: 63px; top: -0.01px; position: absolute; background: white"></div>
    <div class="Vector" style="width: 3.96px; height: 4.49px; left: 69.43px; top: -0px; position: absolute; background: white"></div>
  </div>
</div>
<div class="RanselGenali25l01" style="width: 166px; height: 24px; left: 1190px; top: 727px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Lexend Deca; font-weight: 400; text-decoration: underline; text-transform: uppercase; line-height: 30px; word-wrap: break-word">Ransel Genali 25L 01</div>
<div class="Frame11" style="left: 80px; top: 72px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
  <div style="width: 176px; color: #2B2B35; font-size: 18px; font-family: Lexend Deca; font-weight: 300; text-transform: uppercase; line-height: 30px; word-wrap: break-word">{{ key }}</div>
  <div class="Frame7" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 80px; display: flex">
    <div class="Frame4" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: flex">
      <div class="Frame2" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex">
        <div class="Frame1" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
          <div class="ExploreTheNightlifeOfYourCity" style="width: 667px; color: #2B2B35; font-size: 72px; font-family: Lexend Deca; font-weight: 800; text-transform: uppercase; word-wrap: break-word">{{ activity }} </div>
          <div class="OutdoorSportingGoodsCompany" style="width: 516px; height: 48px; color: #2B2B35; font-size: 24px; font-family: Lexend Deca; font-weight: 600; text-transform: uppercase; line-height: 100px; word-wrap: break-word">Outdoor & Sporting Goods Company</div>
        </div>
        <div class="Group33131" style="height: 104px; position: relative">
          <div class="Group33116" style="width: 249px; height: 60px; left: 0px; top: 0px; position: absolute">
            <div class="Rectangle8858" style="width: 249px; height: 60px; left: 0px; top: 0px; position: absolute; background: #D93A31"></div>
            <div class="ExploreMore" style="width: 122.48px; height: 32px; left: 29.60px; top: -19px; position: absolute; text-align: center; color: white; font-size: 14px; font-family: Lexend Deca; font-weight: 600; text-transform: uppercase; line-height: 100px; word-wrap: break-word"><a href="{{ link }}"> EXPLORE MORE </a> </div>
            <div class="Arrow3" style="width: 43.89px; height: 0px; left: 176.57px; top: 30px; position: absolute; border: 0.50px white solid"></div>
          </div>
          <div class="WeHaveMoreSpecialGoodsForYou" style="width: 351px; left: 0px; top: 74px; position: absolute; color: #2B2B35; font-size: 18px; font-family: Lexend Deca; font-weight: 300; line-height: 30px; word-wrap: break-word">We have more special goods for you 🚀</div>
        </div>
      </div>
      <div class="Frame3" style="justify-content: flex-start; align-items: flex-start; gap: 94px; display: inline-flex">
        <div class="Group33132" style="width: 182px; height: 133px; position: relative">
          <div style="width: 152px; left: 0px; top: 15px; position: absolute; color: #2B2B35; font-size: 80px; font-family: Lexend Deca; font-weight: 800; text-transform: uppercase; line-height: 100px; word-wrap: break-word">50+</div>
          <div class="AdventureProduct" style="width: 176px; left: 6px; top: 103px; position: absolute; color: #2B2B35; font-size: 14px; font-family: Lexend Deca; font-weight: 600; text-transform: uppercase; line-height: 30px; word-wrap: break-word">adventure product</div>
          <div class="MoreThan" style="width: 176px; left: 6px; top: 0px; position: absolute; color: #2B2B35; font-size: 14px; font-family: Lexend Deca; font-weight: 300; text-transform: uppercase; line-height: 30px; word-wrap: break-word">More than</div>
        </div>
        <div class="Group33133" style="width: 192px; height: 133px; position: relative">
          <div style="width: 192px; left: 0px; top: 15px; position: absolute; color: #2B2B35; font-size: 80px; font-family: Lexend Deca; font-weight: 800; text-transform: uppercase; line-height: 100px; word-wrap: break-word">75+</div>
          <div class="OutletInIndonesia" style="width: 176px; left: 6px; top: 103px; position: absolute; color: #2B2B35; font-size: 14px; font-family: Lexend Deca; font-weight: 600; text-transform: uppercase; line-height: 30px; word-wrap: break-word">OUTLET IN INDONESIA</div>
          <div class="MoreThan" style="width: 176px; left: 6px; top: 0px; position: absolute; color: #2B2B35; font-size: 14px; font-family: Lexend Deca; font-weight: 300; text-transform: uppercase; line-height: 30px; word-wrap: break-word">More than</div>
        </div>
      </div>
    </div>
    <div class="Frame5"></div>
  </div>
</div>
</div>

</body>
</html>
    `;

const renderedPages = pages.map((pageData) => {
    return pageTemplate.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (match, key) => {
      return pageData[key] || "";
    });
  });

  res.send(renderedPages.join("\n"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

module.exports = app;