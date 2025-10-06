import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Connection error:", err));

const productData = {
  name: "GoodYear Eagle F1 Asymmetric 6",
  slug: "goodyear-eagle-f1-asymmetric-6", // ✅ required field
  category: "Sommardäck",
  category_id: new mongoose.Types.ObjectId("6713b24ef4e2c911a9adbe33"), // ✅ replace with actual category _id
  price: 2007,
  currency: "kr",
  unit: "/st",
  productImage: "https://res.cloudinary.com/dfg7wekwd/image/upload/v1759737902/product-image_jjwbil.avif",
  euClassificationImage: "https://res.cloudinary.com/dfg7wekwd/image/upload/v1759737912/product-faq_st04lp.svg",
  details:
    "Designat för att leverera utmärkt prestanda på både torra och våta vägar. Med responsiv manövrering och adaptivt grepp är detta däck perfekt för dig som vill ha full kontroll oavsett väder.",

  extraFees: [
    { icon: "🛠️", text: "Montering och balansering tillkommer med 395 kr/däck" },
    { icon: "♻️", text: "Miljöavgift på 25 kr/däck tillkommer (Återvinningsavg. PV-däck)" },
  ],

  sections: ["Specifikationer", "Köpvillkor", "Vanliga frågor", "EU-klassificering"],

  specifications: {
    "Däckmärke": "GoodYear",
    "Modell": "Eagle F1 Asymmetric 6",
    "Däckstorlek": "225/45R17",
    "Kategori": "Sommardäck",
    "Garanti": "1 års garanti",
    "Säsong": "Sommar",
    "Punkteringsfritt däck": "Nej",
    "Förstärkt däck": "Nej",
    "Passar typ av bil": "Personbil",
    "Däckstorlek - Bredd": "225 mm",
    "Däckstorlek - Profil": "45 % av bredd",
    "Däckstorlek - Diameter": "R17 tum",
    "Belastningsindex": "91",
    "Hastighetsindex": "Y",
    "Rullmotstånd": "C",
    "Våtgrepp": "A",
    "Ljudnivå": "69 dB",
    "Vikt": "9.12 kg",
    "Bilias artikelnummer": "VX GYS721235",
    "Tillverkarens artikelnummer": "721235",
    "EAN-kod / GTIN13": "4038526475282",
  },

  // ✅ Corrected FAQ format (array of categories)
  faqs: [
    {
      category: "Alla frågor",
      items: [
        {
          q: "Passar produkten min bil?",
          a: "Vi erbjuder filtrering med hjälp av registreringsnummer... ändra vald dimension i webbshopen så att du köper däck som passar bilen.",
        },
        {
          q: "Vad är passningsgaranti?",
          a: "När du köper nya däck hos Speedy Tyres med Monterat och klart garanterar vi att däcken du har beställt passar din bil...",
        },
      ],
    },
    {
      category: "Produkt",
      items: [
        {
          q: "Passar produkten min bil?",
          a: "När du anger ditt registreringsnummer hittar vi vanligtvis alla giltiga dimensioner...",
        },
        {
          q: "Vad är passningsgaranti?",
          a: "När du köper nya däck hos Speedy Tyres med Monterat och klart garanterar vi att däcken du beställt passar din bil...",
        },
      ],
    },
    {
      category: "Monterat och klart",
      items: [
        {
          q: "Vad ingår i monterat och klart?",
          a: "Vi monterar av hjulen, demonterar de gamla däcken... arbetet tar ungefär 1,5 timme.",
        },
        {
          q: "Vad ingår i monteringsavgiften?",
          a: "För montering och balansering tillkommer en kostnad på 560 kr per däck...",
        },
      ],
    },
    {
      category: "Däckhotell",
      items: [
        {
          q: "Hur mycket rabatt får jag som däckhotellskund när jag köper nya däck?",
          a: "Som däckhotellskund får du alltid 15% rabatt på nya sommar- och vinterdäck.",
        },
        {
          q: "Hur gör jag för att köpa nya däck till mina hjul på däckhotellet?",
          a: "Om du har däckhotell och beställer däck till hjulen som ligger på hotellet skickas din beställning automatiskt vidare till montering.",
        },
      ],
    },
    {
      category: "Betalning",
      items: [
        {
          q: "Kan jag betala mitt verkstadsbesök med CarPay?",
          a: "Ja, har du bokat monterat & klart och haft din bil inne hos oss...",
        },
      ],
    },
    {
      category: "Ångerrätt",
      items: [
        {
          q: "Hur ombokar eller avbokar jag en beställning?",
          a: "För att om- eller avboka kontaktar du oss på kundservice via 0313951200 eller Info@speedy-tyres.se.",
        },
      ],
    },
  ],

  terms: {
    "Allmänt": "På webbplatsen erbjuder Speedy Tyres konsumenter och företag möjlighet ...",
    "Avtal": "För att kunna göra en beställning eller tidsbokning på Webbplatsen behöver du acceptera villkoren ...",
    "Priser, avgifter och betalning": "Vid beställning eller tidsbokning gäller de priser som anges ...",
    "Kampanjer och erbjudanden": "Vi kan från tid till annan erbjuda kampanjer som kan ha förmånligare villkor ...",
    "Tjänster": "Speedy Tyres erbjuder ett flertal olika tjänster såsom däckbyte ...",
    "Ångerrätt för konsumenter vid distansavtal": "Vid distansavtal har du 14 dagars ångerrätt ...",
    "Garanti": "Vi lämnar ett (1) års garanti på varor ...",
    "Reklamation": "Du som är konsument har alltid rätt att reklamera fel i varor ...",
    "Ansvarsbegränsning - näringsidkare": "En kund som är ett företag har utöver prisavdrag inte rätt till ersättning ...",
    "Produktinformation m.m": "Vi på Speedy Tyres reserverar oss för slutförsäljning ...",
    "Personuppgifter": "Speedy Tyres är personuppgiftsansvarig för behandlingen av dina personuppgifter ...",
    "Övrigt": "Speedy Tyres har antagit en uppförandekod som alla medarbetare ska följa ...",
  },
};

// Insert product
(async () => {
  try {
    await Product.deleteMany({});
    const product = await Product.create(productData);
    console.log("✅ Product inserted successfully:", product.name);
  } catch (err) {
    console.error("❌ Error inserting product:", err.message);
  } finally {
    mongoose.connection.close();
  }
})();
