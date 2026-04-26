const express = require('express');
const app = express();
const path = require('path');

//Middleware to parse JSON  and serve statics files (like your widgets script)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//mock database
const db={
     user:[
          {id:"tenant123", email:"tenant123@example.com" ,plan:"premium" ,mrr:0},
          {id:"tenant456", email:"boss@enterprise.com" ,plan:"free" ,mrr:49} ,
     ],
     feedbacks:[
          {tentantId:"tenant123" , userEmail:"angry@user.com" , message :"Button is broken" , data :"2024-06-01T12:00:00Z"},
          {tentantId:"tenant123" , userEmail:"happy@user.com" , message :"Love the new feature!" , data :"2024-06-02T15:30:00Z"},
          {tentantId:"tenant456" , userEmail:"boss@enterprise.com" , message :"Great product!" , data :"2024-06-03T09:15:00Z"}
     ]
}

//routes :marketing team will use this to display feedbacks in their dashboard
app.get('/',(req,res)=>{
     res.render('marketing');
})


//route :operations team will use this to display feedbacks in their dashboard
app.get('/dashboard',(req,res)=>{
     // res.render('dashboard',{feedbacks:db.feedbacks});
     const currentTenant= db.user[0]; // In real app, you'd get this from auth/session

     const tenantFeedbacks = db.feedbacks.filter(fb => fb.tentantId === currentTenant.id);

     res.render('dashboard',{feedbacks:tenantFeedbacks , user:currentTenant});
});

// Route : the Product (widget api)
app.post('/api/feedback',(req,res)=>{
     const {tentantId,userEmail,message} = req.body;

     db.feedbacks.push({
          tentantId:tentantId,
          userEmail:userEmail,
          message:message,
          data: new Date().toISOString().split('T')[0] // just date part
     });
     // console.log("New feedback received:", {tentantId,userEmail,message});
     console.log(`[CEO Alert] New feedback captured for tenant: ${tenantId}`);
    res.status(200).json({ success: true, message: "Feedback saved." });
})

const port = 3000;
app.listen(port,()=>{
     console.log(`🚀 Saas running on http://localhost:${port}`);
     console.log(`📊 Marketing dashboard: http://localhost:${port}/`);
});