# 0.4 New Note

browser->server: HTTP POST <https://fullstack-exampleapp.herokuapp.com/new_note>  
  
note over server:  
server receives new note  
server keeps the note, refreshes  
browser with new note added  
end note  
  
server-->browser: new_note  
browser->server: HTTP GET <https://fullstack-exampleapp.herokuapp.com/notes>  
server-->browser: notes  
browser->server: HTTP GET <https://fullstack-exampleapp.herokuapp.com/main.css>  
server-->browser: main.css  
browser->server: HTTP GET <https://fullstack-exampleapp.herokuapp.com/main.js>  
server-->browser: main.js  
browser->server: HTTP GET <https://fullstack-exampleapp.herokuapp.com/data.json>  
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]  
