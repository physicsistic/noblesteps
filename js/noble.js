var timeline = {
            "timeline": {
              
                ///////// Some stuff to show when the timeline first loads /////////
                "headline":"So Choi",
                "type":"default",
                "text":"<p>A legal process that resulted in a family's #undocumented status</p>",
                "asset": {
                    "media":"images/1.jpg",
                    "caption":"On roof of one San Francisco condo"
                },
                
                ///////// Individual timeline entries /////////
                "date": [
                    {
                        "startDate":"2001,04,01",
                        "headline":"Entry to United States",
                        "text":"<p>Immigrated with both parents and younger sister on April Fool's Day.</p>",
                        "asset": {
                            "media":"images/2.jpg",
                            "caption":"Younger sister, mother, So, father",
                            "thumbnail": "images/2.png"
                        }
                    },
                    
                    {
                        "startDate":"2001,09,11",
                        "headline":"9/11",
                        "text":"<p>Terrorist attacks in New York results in a strict immigration system for a more secure homeland, delaying all current and future application processes.</p>",
                        "asset": {
                            "media":"images/911.jpg",
                            "caption":"",
                            "credit": "@beni9130"
                        }
                    },
                    
                    {
                        "startDate":"2002,01,10",
                        "endDate":"2010,04,01",
                        "headline":"Applied for Green Card",
                        "text":"<p>Family friend offers to sponsor us for our green card application.</p>",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"images/passport.jpg",
                            "credit":"Via Google"
                        }        
                    },
                    
                    {
                        "startDate":"2007,10,10",
                        "headline":"Got a California ID",
                        "text":"<p>This ID unfortunately expired too quickly and my only legal form of ID left afterwards was my passport.</p>",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"images/korean-passport.jpg",
                            // "caption":"This is a stock photo."
                            "caption": "My only form of ID."
                        }
                    },
                    
                    
                    {
                        "startDate":"2008,01,01",
                        "headline":"Enrolled at a local community college",
                        "text":"<p>De Anza College was my source of empowerment and inspiration to begin activism for not only immigrant communities but for queers, Asian Pacific Islanders, and for sustainable funding for higher education.</p>",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"images/deanza.jpg",
                            // "caption":"This is a stock photo."
                            "credit": "via Google"
                        }        
                    },

                    {
                        "startDate":"2011,04,01",
                        "headline":"Green card application rejection",
                        "text":"<p>Green card sponsors were not eligible to sponsor us due to their reported income level. (Their actual income level was higher, but they reported less to pay less taxes.)</p>",
                        "classname":"rejection",
                        "asset": {
                            "media":"images/app-rejection.jpg",
                            "credit":"via Google"
                        }
                    },
                    
                    {
                        "startDate":"2011,05,01",
                        "endDate":"2012,07,15",
                        "headline":"Appeal for Green card",
                        "text":"<p>We file an appeal for the green card application, gathering as many documents as we can to prove that our sponsors did indeed have sufficient income.</p>",
                        "classname":"rejection",
                        "asset": {
                            "media":"images/gavel.jpg",
                            "credit":"via Google"
                        }
                    },
                    
                    {
                        "startDate":"2011,06,01",
                        "headline":"Visa change to dependent of student visa holder",
                        "text":"<p>To avoid becoming out of status, my father enrolls in a college in Oakland. My sister and I automatically attain a dependent student visa F-2.</p>",
                        "classname":"optionaluniqueclassnamecanbeaddedhere",
                        "asset": {
                            "media":"images/so-dad.jpg",
                            "caption":""
                        }
                    },
                    
                    {
                        "startDate":"2012,06,01",
                        "headline":"Father's F1 expires after his graduation",
                        "text":"<p>He does not file for OPT and subsequently both his daughters who are under a dependent visa, become out of status.</p>",
                        "classname":"rejection",
                        "asset": {
                            "media":"images/sarah.jpg",
                            "caption":""
                        }
                    },
                    
                    {
                        "startDate":"2012,07,15",
                        "headline":"Green card appeal rejection",
                        "text":"<p>Our appeals process, after two more years of waiting, finally is upheld. We are given the opportunity to appeal once more, but at this point we have no money, resources, or the energy for another go at the legal process.</br>The timeframe for DACA eligibility is announced at June 15, 2012, rendering my sister and I ineligible for a work permit or a driver's license--just by two weeks.</p>",
                        "classname":"rejection",
                        "asset": {
                            "media":"images/final-rejection.jpg",
                            "caption":""
                        }
                    }           
                ]
            }  
          };

createStoryJS({
  type:       'timeline',
  width:      '100%',
  height:     '600',
  start_zoom_adjust:  2,
  source:     timeline,
  embed_id:   'vis'
});