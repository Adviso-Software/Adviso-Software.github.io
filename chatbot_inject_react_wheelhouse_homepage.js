(function() {

    
    // Detect if the user is on a mobile device
    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    
    //UI for mobile
     if (detectMob()) {

//---------------------------------------      
//MOBILE
//---------------------------------------
       // Create and inject the style element
            const style = document.createElement('style');
            style.innerHTML = `
               @keyframes bounce {
                      0%, 100% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-8px);
                      }
                }
              #bounce-text {
                animation: bounce 1.5s infinite;
                bottom: 65px;
                width: 150px;
                right: 0px;
                background-color: rgba(192,40,39,1);
                opacity: 1;
                padding: 7px;
                border-radius: 50px;
                border-bottom-right-radius: 0px;
                position: absolute;
                font-size: 17px !important;
                border: 1px solid black;
                animation-iteration-count: 5;
                font-family: Anybody !important;
                font-weight: normal !important;
              }
              #chatbot-container {
                position: fixed;
                right: 0;
                bottom: 0;
                width: 94%; 
                height:70vh;
                margin-right: 3%;
                margin-left: 3%;
                margin-bottom: 10px;
                background-color: transparent;
                display: none; /* Initially hidden */
                border-radius: 0.5rem;
                z-index:999;
                box-shadow: 
                    0px 4px 6px rgba(0, 0, 0, 0.1), /* Bottom shadow */
                    -4px 0px 6px rgba(0, 0, 0, 0.1), /* Left shadow */
                    4px 0px 6px rgba(0, 0, 0, 0.1),  /* Right shadow */
                    0px -4px 6px rgba(0, 0, 0, 0.1); /* Top shadow */
              }
              #chatbot-container iframe {
                width: 100%;
                height:100%;
                border: none; 
                background-color: transparent;
              }
              #show-chatbot-btn {
                position: fixed;
                right: 0px;
                bottom: 30px;
                background-color: rgba(0,0,0,0);
                color: white;
                border: none;
                cursor: pointer;
                display: flex; 
                z-index:999;
                padding: 0px;
              }
              #hide-chatbot-btn {
                position: absolute;
                top:31px;
                right:55px;
                background-color: #000000;
                color: black;
                cursor: pointer;
                border-radius: 500px;
                border-color: black;
                border-width: 1px;
                display: none; /* Initially hidden */
              }
              #new-chatbot-title{
               background-color: #000000;
               position: absolute;
               top: 12px;
               left: 18px;
               height: 60px;
               width: 240px,
               color: #ffffff;
               display: flex;
              }
            `;
            document.head.appendChild(style);
          
            // Create and inject the show chatbot button
            const showChatbotBtn = document.createElement('button');
            showChatbotBtn.id = 'show-chatbot-btn';
            showChatbotBtn.innerHTML = `
             <div style="height: 60px; width: 60px;  display:contents">
                 <img src="https://Adviso-Software.github.io/cut_clevvur_icon.png" alt="Icon" style="height: 60px; width: auto;" />
             </div>
              
              <span id="bounce-text">
                Talk to our AI Budtender!
              </span>
            `;
            document.body.appendChild(showChatbotBtn);
          
            // Create and inject the chatbot container
            const chatbotContainer = document.createElement('div');
            chatbotContainer.id = 'chatbot-container';
            chatbotContainer.innerHTML = `
              <button id="hide-chatbot-btn" style="padding: 0; background: none; border: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.854 4.146a.5.5 0 0 1 .708 0L8 7.293l2.438-2.438a.5.5 0 1 1 .708.708L8.707 8l2.439 2.438a.5.5 0 0 1-.708.708L8 8.707l-2.438 2.439a.5.5 0 0 1-.708-.708L7.293 8 4.854 5.562a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <div id="new-chatbot-title" >
                    <img src="https://adviso-software.github.io/icon.jpg" alt="Round" style="width: 30px; height: 30px; background-color: rgb(255,255,255); border-radius: 500px; padding: 2px; margin-top: 16px; margin-right: 10px;" />
                    <div style="display: flex; flex-direction: column; padding-top: 17px;">
                      <span style="color:white">Wheelhouse Buddy</span>
                      <button style="text-align: left; margin-top: 0px; text-decoration: underline; background-color:rgba(0,0,0,0); padding:0px; padding-right:30px; font-size: 12px; color:white; border: none; box-shadow: none;" onclick="window.open('https://clevvur.com', '_blank')">Powered ⚡️by Clevvur.com</button>
                </div>

            </div>
              <iframe src="https://wheelhouse-chat-fc453a4cc8a7.herokuapp.com/" allowtransparency="true"></iframe>
            `;
            document.body.appendChild(chatbotContainer);
          

          
            // Add event listeners
            document.getElementById('show-chatbot-btn').addEventListener('click', function() {
              document.getElementById('chatbot-container').style.display = 'block';
              document.getElementById('hide-chatbot-btn').style.display = 'block';
              this.style.display = 'none'; // Hide the button after showing the chatbot
            });
            document.getElementById('hide-chatbot-btn').addEventListener('click', function() {
              document.getElementById('show-chatbot-btn').style.display = 'block';
              document.getElementById('chatbot-container').style.display = 'none';
              this.style.display = 'none'; 
            });
     
        
    }











         
     else{ 
         
         
//---------------------------------------      
//DESKTOP
//---------------------------------------


          // Create and inject the style element
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes bounce {
                      0%, 100% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-8px);
                      }
                }
              #bounce-text {
                animation: bounce 1.5s infinite;
                bottom: 130px;
                width: 200px;
                right: 0px;
                background-color: rgba(192,40,39,1);
                opacity: 1;
                padding: 10px;
                border-radius: 50px;
                border-bottom-right-radius: 0px;
                position: absolute;
                font-size: 17px !important;
                border: 1px solid black;
                animation-iteration-count: 5;
                font-family: Anybody !important;
                font-weight: normal !important;
             }

              #chatbot-container {
                position: fixed;
                right: 0;
                bottom: 0;
                width: 400px; 
                height:65vh;
                margin-right: 10px;
                margin-bottom: 10px;
                background-color: transparent;
                z-index:99999;
                display: none;
                border-radius: 0.5rem;
                box-shadow: 
                    0px 4px 6px rgba(0, 0, 0, 0.1), /* Bottom shadow */
                    -4px 0px 6px rgba(0, 0, 0, 0.1), /* Left shadow */
                    4px 0px 6px rgba(0, 0, 0, 0.1),  /* Right shadow */
                    0px -4px 6px rgba(0, 0, 0, 0.1); /* Top shadow */
              }
              #chatbot-container iframe {
                width: 100%;
                height:100%;
                border: none; 
                background-color: transparent;
              }
              #show-chatbot-btn {
                position: fixed;
                right: 0px;
                bottom: 30px;
                background-color: rgba(0,0,0,0);
                color: white;
                border: none;
                cursor: pointer;
                display: flex; 
                padding: 0px !important;
              }
              #hide-chatbot-btn {
                position: absolute;
                top:31px;
                right:55px;
                background-color: #000000;
                color: black;
                cursor: pointer;
                border-radius: 500px;
                border-color: black;
                border-width: 1px;
                display: none;
              }
              #new-chatbot-title{
               background-color: #000000;
               position: absolute;
               top: 12px;
               left: 18px;
               height: 60px;
               width: 350px,
               color: #ffffff;
               display:flex;
              }
            `;
            document.head.appendChild(style);
          
            // Create and inject the show chatbot button
            const showChatbotBtn = document.createElement('button');
            showChatbotBtn.id = 'show-chatbot-btn';
            showChatbotBtn.innerHTML = `
              <div style="height: 128px; width: 128px; display:contents">
                 <img src="https://Adviso-Software.github.io/cut_clevvur_icon.png" alt="Icon" style="height: 128px; width: auto;" />
             </div>
             
              <span id="bounce-text"">
                Talk to our AI Budtender!
              </span>
            `;
            document.body.appendChild(showChatbotBtn);
          
            // Create and inject the chatbot container
            const chatbotContainer = document.createElement('div');
            chatbotContainer.id = 'chatbot-container';
            chatbotContainer.innerHTML = `
              <button id="hide-chatbot-btn" style="padding: 0; background: none; border: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="white" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.854 4.146a.5.5 0 0 1 .708 0L8 7.293l2.438-2.438a.5.5 0 1 1 .708.708L8.707 8l2.439 2.438a.5.5 0 0 1-.708.708L8 8.707l-2.438 2.439a.5.5 0 0 1-.708-.708L7.293 8 4.854 5.562a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <div id="new-chatbot-title" >
              <img src="https://adviso-software.github.io/icon.jpg" alt="Round" style="width: 50px; height: 50px; background-color: white; border-radius: 500px; padding: 2px; margin-top: 4px; margin-right: 10px;" />
                <div style="display: flex; flex-direction: column; padding-top: 13px;">
                  <span style="color:white">Wheelhouse Buddy</span>
                  <button style="text-align: left; font-size: 14px; text-decoration: underline; background-color:rgba(0,0,0,0); padding:0px; color:white; border: none; box-shadow: none;" onclick="window.open('https://clevvur.com', '_blank')">Powered ⚡️by Clevvur.com</button>
                </div>

            </div>
              <iframe id="chatbot-iframe" src="https://wheelhouse-chat-fc453a4cc8a7.herokuapp.com/" allowtransparency="true"></iframe>
            `;
            document.body.appendChild(chatbotContainer);
          


         
            // Add event listeners
             document.getElementById('bounce-text').addEventListener('click', function() {
              document.getElementById('chatbot-container').style.display = 'block';
              document.getElementById('hide-chatbot-btn').style.display = 'block';
              this.style.display = 'none'; // Hide the button after showing the chatbot
            });
            document.getElementById('show-chatbot-btn').addEventListener('click', function() {
              document.getElementById('chatbot-container').style.display = 'block';
              document.getElementById('hide-chatbot-btn').style.display = 'block';
              this.style.display = 'none'; // Hide the button after showing the chatbot
            });
            document.getElementById('hide-chatbot-btn').addEventListener('click', function() {
              document.getElementById('show-chatbot-btn').style.display = 'block';
              document.getElementById('chatbot-container').style.display = 'none';
              this.style.display = 'none'; 
            });




     }

     

     
})();
