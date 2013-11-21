var timeline = {
  "timeline": {
    
      ///////// Some stuff to show when the timeline first loads /////////
    
      "headline":"Jon Doe's journey",
      "type":"default",
      "text":"<p>I did it!</p>",
      "asset": {
          "media":"img/citizenship.jpg",
          "credit":"Credit Name Goes Here",
          "caption":"Caption text goes here"
      },
      
      
      
      ///////// Individual timeline entries /////////
      
      
      "date": [
          {
              "startDate":"2011,12,10",
              "endDate":"2011,12,11",
              "headline":"Citizenship!",
              "text":"<p>Body text goes here, some HTML is OK</p><p> Another parapgraph</p>",
              "tag":"This is Optional",
              "classname":"abcdef",
              "asset": {
                  "media":"img/flag-big.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here",
                  "thumbnail": "img/flag.png"
              },
              "tag": "foo",
              "id": "abc-def"         
          },
          
          {
              "startDate":"2012,9,10",
              "endDate":"2012,12,11",
              "headline":"Citizenship!",
              "text":"<p>Body text goes here, some HTML is OK</p>",
              "tag":"This is Optional",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/sunset.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              },              
              "tag": "bar"                           
          },
          
          {
              "startDate":"2012,8,10",
              "endDate":"2012,12,11",
              "headline":"Citizenship!",
              "text":"<p>Body text goes here, some HTML is OK</p>",
              "tag":"baz",
              "classname":"optionaluniqueclassnamecanbeaddedhere",
              "asset": {
                  "media":"img/passport.jpg",
                  "credit":"Credit Name Goes Here",
                  "caption":"Caption text goes here"
              },
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