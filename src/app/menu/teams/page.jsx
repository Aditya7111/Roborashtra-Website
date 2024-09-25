import Member from "@/components/Member/Member";
import "./teams.css";



const coordinator = "https://drive.google.com/uc?export=download&id=17krXNhYPK8RdRXOGSh18u0hQ1kP1_bFQ"
const lead="https://drive.google.com/uc?export=download&id=1hQVM9pWlFG0d9zdj4ixiZyH24uoUegsv"
const colead="https://drive.google.com/uc?export=download&id=1moKkj5GKyT2f3JlTzTr6y7hxBDhGWi5M"
const colead2 = "https://drive.google.com/uc?export=download&id=1jTs5U0jnHXyCcjsO4DrKFBw32dkNz0me"
const chetan = "https://drive.google.com/uc?export=download&id=1itO9IjekkgFBHqQmuY3nnGlc2yu8pwoR";
const dnyanesh = "https://drive.google.com/uc?export=download&id=1rZ3aggd63viXnRrpJ8S9vWRiAZhYrC9Q";
const manas = "https://drive.google.com/uc?export=download&id=1P9B3oT8GPIX5OYYSAMYDT9PAAXbmdx5Z";
const manas_pr = "https://drive.google.com/uc?export=download&id=1km7akZt7jwl__Pq3wMN2w8uTiw2W_CI0";
const manasi = "https://drive.google.com/uc?export=download&id=1v3O0i-XW5buTJ9mKrwjKvjxpGRAzTBlV";
const mayur = "https://drive.google.com/uc?export=download&id=19MSHDGAY8XVtp-x8qLBUIQvBJMDv-nuP";
const mehul = "https://drive.google.com/uc?export=download&id=1BjZatuHgef6Ml6MwgYXcEIFKfc9XfPzM";
const samrudhi = "https://drive.google.com/uc?export=download&id=1Hcc0rLRYka0HsX-59ZdQ3Oe2yO912xYV";
const shreeram = "https://drive.google.com/uc?export=download&id=1lEOIr_MaE__ta_nlTI2ULSlWbADu6EWe";
const gaurav = "https://drive.google.com/uc?export=download&id=18g8ILvtYTbociH2MorIC5Yxwj2o9bu9y"
const vedant = "https://drive.google.com/uc?export=download&id=14luZ-VUtPWaEc9-4dnzlZKo8h0rTkA4P";
const vishal = "https://drive.google.com/uc?export=download&id=1TE463tRRpkG0fpKWvZr6Cx-RmSpeOcB-";
const shrushti = "https://drive.google.com/uc?export=download&id=1yip3hjKCYRmLcN7wq0JcSuNyw-zG0KR_";
const srushti = "https://drive.google.com/uc?export=download&id=1BPH5ocDjW6m6zcJHstYqZcxK-BLxCBzb";
const vedantRaut = "https://drive.google.com/uc?export=download&id=1_NCNC0NZOTTkWdNMkUkAU8E0HGLusjl4";
const aastha = "https://drive.google.com/uc?export=download&id=19GYnFV-G792CUTvDxJVBuQo00VkfVKWX";
const avishkar = "https://drive.google.com/uc?export=download&id=1349abd4F_J9qud77hTcTEhjyswAHW7lQ"
const chandrakantBM = "https://drive.google.com/uc?export=download&id=1BG-MWvTq62l3CrV14waDueXe_9cpmXOB"


export default function Teams() {



  return (
    
    // <div className=" text-center text-lg">
    //   Coming Soon </div>
    <div className="team" >
    <div className="team_wrapper">


      <h2 className="text-center text-lg">Event Co-ordinator</h2>
      <div className="team_row">
            <Member image={coordinator} email={"mahendra.salunke@pccoer.in"} linkedIn={"https://www.linkedin.com/in/mahendra-salunke-b9958128/"}/>
      </div>

      <h2 className="text-center text-lg">Lead & Co-Lead</h2>
      <div className="team_row">
            <Member image={lead} email={"om.khare_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/om-khare-5bb6b8236/"}/>
            <Member image={colead} email={"khushi.rohra_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/khushi-rohra-aa53a6259/"}/>
            <Member image={colead2} email={"chandrakant.raut_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/chandrakant-raut-0606b8236/"}/>

      </div>

      <h2 className="text-center text-lg">Head & Co-Head</h2>
      <div className="team_row">
      <Member image={vishal} email={"vishal.jangid_it22@pccoer.in"} linkedIn={"https://www.linkedin.com/in/vishal-jangid-359b54259/"}/>
            <Member image={shreeram} linkedIn={"https://www.linkedin.com/in/shreeramshanmugasundaram/"}/>
            <Member image={gaurav} email={"gaurav.latpate_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/latpate-gaurav-433ba7236"}/>
            <Member image={vedant} email={"vedant.patil_comp221@pccoer.in"} linkedIn={"https://www.linkedin.com/in/connect-vedant-patil/"}/>
            <Member image={dnyanesh} email={"dnyaneshwari.jadhav_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/dnyaneshwari-jadhav-a927a3236"}/>
            <Member image={shrushti} email={"srushti.bhoir_entc22@pccoer.in"}/>
            <Member image={vedantRaut}/>
            <Member image={srushti} email={"shrushti.bahiruwale_entc22@pccoer.in"}/>
            <Member image={avishkar}/>
            <Member image={aastha}/>
            <Member image={manas_pr}/>
            <Member image={manasi} email={"manasi.velhal_comp21@pccoer.in"} linkedIn={"www.linkedin.com/in/manasi-velhal-2a9921277"}/>
            <Member image={samrudhi} email={"samruddhi.patil_comp22@pccoer.in"} linkedIn={"https://www.linkedin.com/in/samruddhi-patil-833817259"}/>
            <Member image={chetan} email={"chetan.phulmante_comp21@pccoer.in"} linkedIn={"www.linkedin.com/in/chetan-phulmante-303b99236"}/>
            <Member image={mayur}/>
            <Member image={mehul}/>
            <Member image={manas}/>
            <Member image={chandrakantBM} email={"chandrakant.raut_comp21@pccoer.in"} linkedIn={"https://www.linkedin.com/in/chandrakant-raut-0606b8236/"}/>

      </div>
    </div>
  </div>
  );
}