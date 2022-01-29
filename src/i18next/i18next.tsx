/*
 *
 *  * (C) Copyright 2006-2020 hSenid Mobile Solutions (Pvt) Limited.
 *  *
 *  * All Rights Reserved.
 *  *
 *  * These materials are unpublished, proprietary, confidential source code of
 *  * hSenid Mobile Solutions (Pvt) Limited and constitute a TRADE SECRET
 *  * of hSenid Mobile Solutions (Pvt) Limited.
 *  *
 *  * hSenid Mobile Solutions (Pvt) Limited retains all title to and intellectual
 *  * property rights in these materials.
 *  *
 */

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import React from "react";

const resources = {
  en: {
    translation: {
      mainHeader: {
        online: "Té Online",
        retail: "Retail",
        blog: "Blog",
        contactUs: "Contact Us",
        home: "Home",
        aboutUs: "About Us",
        products: "Products",
        productCat: {
          garden: {
            title: "Té Garden",
            catOne: "Estate",
            catTwo: "Region"
          },
          bliss: {
            title: "Bliss",
            catOne: "Estate",
            catTwo: "Region"
          },
          blissEx: {
            title: "Bliss Exquisite",
            catOne: "Estate",
            catTwo: "Region"
          },
          green: {
            title: "Té Green",
            catOne: "Estate",
            catTwo: "Region"
          },
        }
      },
      header: {
        home: "Home",
        aboutUs: "About Us",
        products: "Products",
        contactUs: "Contact Us",
        lang: {
          en: "EN",
          de: "DE"
        }
      },
      home: {
        slider: {
          capOne: "A single region Ceylon Tea gently fused with Bergamot flavour.",
          capTwo: ""
        },
        home: "Home",
        aboutUs: {
          title: "READ OUR STORY",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
              "Vestibulum tincidunt sem id leo vestibulum dictum. " +
              "Donec ac libero posuere, condimentum massa a, congue ligula."
        },
        designerTea: {
          title: "OUR DESIGNER TEA",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
              "Vestibulum tincidunt sem id leo vestibulum dictum. " +
              "Donec ac libero posuere, condimentum massa a, congue ligula."
        },
        process: {
          title: "HOW WE MAKE IT",
          description: "Our tea experts have experience and passion in " +
              "seeking out the best teas from the top gardens in the world," +
              " and skillfully blending flavour-packed fruits and herbs to create our infusions"
        },
      },
    },
  },
  de: {
    translation: {
      mainHeader: {
        online: "Té Online",
        retail: "Retail",
        blog: "Blog",
        contactUs: "Contact Us"
      },
      header: {
        home: "Heim",
        aboutUs: "Über uns",
        products: "Produkte",
        lang: {
          en: "EN",
          de: "DE"
        }
      },
      home: {
        slider: {
          capOne: "Ein aus einer Region stammender Ceylon-Tee mit Bergamotte-Aroma.",
          capTwo: ""
        },
        home: "Heim",
        aboutUs: {
          title: "READ OUR STORY",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
              "Vestibulum tincidunt sem id leo vestibulum dictum. " +
              "Donec ac libero posuere, condimentum massa a, congue ligula."
        },
        designerTea: {
          title: "OUR DESIGNER TEA",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
              "Vestibulum tincidunt sem id leo vestibulum dictum. " +
              "Donec ac libero posuere, condimentum massa a, congue ligula."
        },
        process: {
          title: "OUR STANDARDS AREN’T STANDARD",
          description: "Our tea experts have experience and passion in " +
              "seeking out the best teas from the top gardens in the world," +
              " and skillfully blending flavour-packed fruits and herbs to create our infusions"
        },
      }
    },
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;