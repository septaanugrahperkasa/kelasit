const express = require("express");
const path = require("path");

//main page/Kelas IT/
const app = express();
const rute = path.join(__dirname,"/");
app.use(express.static(rute));
//app.use("/2021",express.static(rute+"assets/images/2021"));



app.get("/",function(req,res){
	res.sendFile(rute+"main page/Kelas IT/index.html");
});
app.get("/tentang-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/about us/about-us.html");
});
app.get("/kursus-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/our course/our-course.html");
});
app.get("/potongan-harga-program-kursus",function(req,res){
	res.sendFile(rute+"work/all pages/discount/discount price courses/discount/discount.html");
});
app.get("/mendaftar-kursus",function(req,res){
	res.sendFile(rute+"work/all pages/page/login/login.html");
});
app.get("/blog-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/blog/our-blog.html");
});
app.get("/hubungi-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/contact us/contact-us.html");
});
app.get("/peta-situs",function(req,res){
	res.sendFile(rute+"work/all pages/page/site map/site-map.html");
});
app.get("/daftar-akun-siswa",function(req,res){
	res.sendFile(rute+"work/all pages/page/login profile/sign up/sign-up.html");
});
app.get("/masuk-akun-siswa",function(req,res){
	res.sendFile(rute+"work/all pages/page/login profile/sign in/sign-in.html");
});
app.get("/lupa-password-akun-siswa",function(req,res){
	res.sendFile(rute+"work/all pages/page/login profile/forgot password/forgot-password.html");
});
app.get("/aplikasi-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/our application/our-application.html");
});
app.get("/cerita-alumni",function(req,res){
	res.sendFile(rute+"work/all pages/page/alumni story/alumni-story.html");
});
app.get("/instruktur-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/our instructor/our-instructor.html");
});
app.get("/faq",function(req,res){
	res.sendFile(rute+"work/all pages/page/faq/faq.html");
});
app.get("/mitra-perekrutan-kami",function(req,res){
	res.sendFile(rute+"work/all pages/page/hiring partners/hiring-partners.html");
});
app.get("/daftar-mitra-perekrutan",function(req,res){
	res.sendFile(rute+"work/all pages/page/hiring partners/sign up/sign-up.html");
});
app.get("/masuk-mitra-perekrutan",function(req,res){
        res.sendFile(rute+"work/all pages/page/hiring partners/sign in/sign-in.html");
});
app.get("/lupa-password-mitra-perekrutan",function(req,res){
        res.sendFile(rute+"work/all pages/page/hiring partners/forgot password/forgot-password.html");
});
app.get("/metode-pembayaran",function(req,res){
	res.sendFile(rute+"work/all pages/page/payment method/payment-method.html");
});
app.get("/isa",function(req,res){
	res.sendFile(rute+"work/all pages/page/Income Share Agreement/isa.html");
});
app.get("/jadwal-sekolah",function(req,res){
	res.sendFile(rute+"work/all pages/page/school schedule/school-schedule.html");
});
app.get("/mendaftar-instruktur",function(req,res){
	res.sendFile(rute+"work/all pages/page/teacher list/teacher-list.html");
});
app.get("/daftar-akun-instruktur",function(req,res){
	res.sendFile(rute+"work/all pages/page/teacher list/sign up/sign-up.html");
});
app.get("/masuk-akun-instruktur",function(req,res){
        res.sendFile(rute+"work/all pages/page/teacher list/sign in/sign-in.html");
});
app.get("/lupa-password-akun-instruktur",function(req,res){
        res.sendFile(rute+"work/all pages/page/teacher list/forgot password/forgot-password.html");
});












app.use("/",function(req,res){
        res.sendFile(rute+"work/all pages/page not found/page not found.html");
});


app.listen(3000,()=>{
	console.log('Server is running...');
});
