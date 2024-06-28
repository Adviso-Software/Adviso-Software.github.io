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
              #chatbot-container {
                position: fixed;
                right: 0;
                bottom: 0;
                width: 350px; 
                height:70vh;
                margin-right: 10px;
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
                bottom: 0px;
                background-color: rgba(0,0,0,0);
                color: white;
                border: none;
                cursor: pointer;
                display: flex; 
                z-index:999;
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
             <div style="height: 60px; width: 60px; margin-right: -25px;">
                 <img src="https://i.imgur.com/CYf5wdV.png" alt="Icon"  />
             </div>
              
              <span style="bottom:70px; width: 150px; right:10px; background-color: rgba(0,0,0,1); opacity: 0.7; padding:7px; border-radius: 50px; border-bottom-right-radius: 0px; position: absolute;">
                Need help? Talk to me!
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
                    <div style="display: flex; flex-direction: column; padding-top: 20px;">
                      <span style="color:white">Wheelhouse Buddy</span>
                      <button style="text-align: left; margin-top: -5px; text-decoration: underline; background-color:rgba(0,0,0,0); padding:0px; padding-right:30px; font-size: 10px; color:white; border: none; box-shadow: none;" onclick="window.open('https://clevvur.com', '_blank')">Powered ⚡️by Clevvur.com</button>
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
              #chatbot-container {
                position: fixed;
                right: 0;
                bottom: 0;
                width: 500px; 
                height:85vh;
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
                bottom: 0px;
                background-color: rgba(0,0,0,0);
                color: white;
                border: none;
                cursor: pointer;
                display: flex; 
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
              <img src="https://i.imgur.com/CYf5wdV.png" alt="Icon" style="height: 128px; width: 128px; margin-right: -25px;" />
              <span style="bottom:130px; width: 200px; right:10px; background-color: rgba(0,0,0,1); opacity: 0.7; padding:10px; border-radius: 50px; border-bottom-right-radius: 0px; position: absolute;">
                Need help? Talk to me!
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
                <div style="display: flex; flex-direction: column; padding-top: 10px;">
                  <span style="color:white">Wheelhouse Buddy</span>
                  <button style="text-align: left; margin-top: -5px; text-decoration: underline; background-color:rgba(0,0,0,0); padding:0px; color:white; border: none; box-shadow: none;" onclick="window.open('https://clevvur.com', '_blank')">Powered ⚡️by Clevvur.com</button>
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

     

     
})();
