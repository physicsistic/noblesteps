var timeline = {
  "timeline": {
    
      ///////// Some stuff to show when the timeline first loads /////////
      "headline":"So Choi's Story",
      "type":"default",
      "text":"<p>When does it end?</p>",
      "asset": {
          "media":"img/1.jpg",
          "caption":"On roof of one San Francisco condo"
      },
      
      ///////// Individual timeline entries /////////
      "date": [
          {
              "startDate":"2001,04,01",
              "headline":"Entry to United States",
              "text":"<p>Immigrated with both parents and younger sister on April Fool's Day.</p>",
              "asset": {
                  "media":"img/2.jpg",
                  "caption":"Younger sister, mother, So, father",
                  "thumbnail": "img/2.png"
              }
          },
          
          {
              "startDate":"2002,01,10",
              "endDate":"2010,04,01",
              "headline":"Applied for Green Card",
              "text":"<p>Family friend offers to sponsor us for our green card application.</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "caption":"This is a stock photo."
              }        
          },
          
          {
              "startDate":"2011,04,01",
              "headline":"Green card application rejection",
              "text":"<p>Green card sponsors were not eligible to sponsor us due to their reported income level. (Their actual income level was higher, but they reported less to pay less taxes.)</p>",
              "classname":"rejection",
              "asset": {
                  "media":"img/passport.jpg",
                  "caption":"This is a stock photo."
              }
          },
          
          {
              "startDate":"2011,05,01",
              "endDate":"2012,07,15",
              "headline":"Appeal for Green card",
              "text":"<p>We file an appeal for the green card application, gathering as many documents as we can to prove that our sponsors did indeed have sufficient income.</p>",
              "classname":"rejection",
              "asset": {
                  "media":"img/passport.jpg",
                  "caption":""
              }
          },
          
          {
              "startDate":"2011,06,01",
              "headline":"Visa change to dependent of student visa holder",
              "text":"<p>To avoid becoming out of status, my father enrolls in a college in Oakland. My sister and I automatically attain a dependent student visa F-2.</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "caption":""
              }
          },
          
          {
              "startDate":"2012,06,01",
              "headline":"Father's F1 expires after his graduation",
              "text":"<p>He does not file for OPT and subsequently both his daughters who are under a dependent visa, become out of status.</p>",
              "classname":"rejection",
              "asset": {
                  "media":"img/passport.jpg",
                  "caption":""
              }
          },
          
          {
              "startDate":"2012,07,15",
              "headline":"Green card appeal rejection",
              "text":"<p>Our appeals process, after two more years of waiting, finally is upheld. We are given the opportunity to appeal once more, but at this point we have no money, resources, or the energy for another go at the legal process.</br>The timeframe for DACA eligibility is announced at June 15, 2012, rendering my sister and I ineligible for a work permit or a driver's license--just by two weeks.</p>",
              "classname":"rejection",
              "asset": {
                  "media":"img/passport.jpg",
                  "caption":""
              }
          }           
      ]
  }  
};


createStoryJS({
  type:       'timeline',
  width:      'inherited',
  height:     'inherited',
  source:     timeline,
  embed_id:   'vis'
});