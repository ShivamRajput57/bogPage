const express=require("express")
const app =express()
const path =require("path")

const port=8080
app.set("views",path.join(__dirname,"/views"))

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"/public/css")))
app.use(express.static(path.join(__dirname,"/public/js")))

const feedbacks = []

app.get("/",(req,res)=>{
    res.render("home", { feedbacks })
})

app.post("/", (req, res) => {
    const { user, feed, rating } = req.body;
    feedbacks.push({ user, feed, rating }); 
    res.redirect("/"); // Redirect to GET / to render updated data
});

app.get("/feedback",(req,res)=>{
    res.render('feedback')
})


app.listen(port,()=>{
    console.log('app is working')
})

