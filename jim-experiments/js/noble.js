var timeline = {
  "timeline": {
    
      ///////// Some stuff to show when the timeline first loads /////////
      "headline":"So Choi's Immigration Timeline",
      "type":"default",
      "text":"<p>When does it end?</p>",
      "asset": {
          "media":"img/citizenship.jpg",
          "credit":"Credit Name Goes Here",
          "caption":"Caption text goes here"
      },
      
      ///////// Individual timeline entries /////////
      "date": [
          {
              "startDate":"2001,04,01",
              "headline":"Entry to United States",
              "text":"<p>Immigrated with both parents and younger sister on April Fool's Day.</p>",
              "classname":"abcdef",
              "asset": {
                  "media":"img/flag-big.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here",
                  "thumbnail": "img/flag.png"
              }
          },
          
          {
              "startDate":"2003,01,10",
              "endDate":"2010,04,01",
              "headline":"Applied for Green Card",
              "text":"<p>Body text goes here, some HTML is OK</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/sunset.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              }        
          },
          
          {
              "startDate":"2010,04,01",
              "headline":"Green card application rejection",
              "text":"<p>Body text goes here, some HTML is OK</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              }
          },
          
          {
              "startDate":"2010,05,01",
              "endDate":"2013,07,13",
              "headline":"Appeal for Green card rejection",
              "text":"<p>Body text goes here, some HTML is OK</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              }
          },
          
          {
              "startDate":"2010,06,01",
              "headline":"Visa change to dependent of student visa holder",
              "text":"<p>Body text goes here, some HTML is OK</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              }
          },
          
          {
              "startDate":"2012,06,01",
              "headline":"Father's F1 expires after his graduation",
              "text":"<p>Subsequently, he does not file for OPT and I, under a dependent visa, become out of status.</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              }
          },
          
          {
              "startDate":"2013,07,15",
              "headline":"Green card appeal rejection",
              "text":"<p>The timeframe for DACA eligibility is announced at July 1, 2013, rendering my sister and I ineligible for a work permit or a driver's license.</p>",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              }
          }           
      ]
  }  
};


createStoryJS({
  type:       'timeline',
  width:      '100%',
  height:     '100%',
  source:     timeline,
  embed_id:   'my-timeline'
});