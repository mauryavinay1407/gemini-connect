const express=require("express");
const {generateAnswers}=require("./services/googleGemini")

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        msg:"Heyy there! "
    })
})

app.get("/api/askme",async(req,res)=>{
    try {
        const {query}=req.body;
        console.log(query);
        const result=await generateAnswers(query);
        res.send({
            "result":result
        })

    } catch (error) {
        console.log(error);
    }
})

app.listen(3000,()=>console.log("server is running at http://localhost:3000"))