import  { useEffect, useState } from 'react'

interface country{
  [key:string]:string

}
const  countryList:country = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};
export default function App() {

  const[country1,setCountry1]=useState("inr");
  const[country2,setCountry2]=useState("inr");
  const[amount,setAmount]=useState(0);
  const[suggestion,setsuggestion]=useState<string[]>([]);
  
  const[amount2,setAmount2]=useState(0);
 
   
useEffect(() => {

  
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country1}.json`).
  then((res)=> {
    return res.json().then((data) => {
  setAmount2(data[country1][country2]*amount); // Assign value to 'amount'
   
    });
  });
  


},[country1,amount,country2])


  const handleonchange1=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputtext=e.target.value;
    

  


const filtered=Object.keys(countryList).filter((country)=>country.toLowerCase().includes(inputtext));
console.log(filtered);

setsuggestion(filtered);

setCountry1(e.target.value.toLowerCase());

  }
  const handleonchange2=(e: React.ChangeEvent<HTMLInputElement>)=>{
    
    const inputtext=e.target.value;
  


const filtered=Object.keys(countryList).filter((country)=>country.toLowerCase().includes(inputtext));

setsuggestion(filtered);
setCountry2(e.target.value.toLowerCase());

  }

  return (
    <div >
      <div className="text-center mt-2 font-bold text-xl"><h1>Currency Converter</h1></div>
      <div className="flex mt-4 ">
        <div className='ml-10'>
        <div><h3>From</h3>
      <input type="number"  className="w-[30vw] bg-slate-200 " onChange={(e)=>{setAmount(e.target.valueAsNumber)}} value={amount} placeholder=' Enter Amount'/></div>
      <div><h3 className="font-bold uppercase">{country1}</h3>
  
      <img src={`https://flagsapi.com/${countryList[country1.toUpperCase()]}/flat/64.png`} alt="" />
      <input type="text"  className="w-[30vw] bg-slate-200" placeholder='Country name' value={country1} onChange={handleonchange1}/>
      
      <ul>
        {suggestion.map((country) => (
          <li onClick={()=>{setCountry1(country.toLowerCase())}} className="bg-slate-300 border-b-4" key={country}>{country}</li>
        ))}
      </ul>
      </div>
      

      </div>
      
<div className='ml-20' >
  <div ><h3 >To</h3>
<div><input type="number " className="w-[30vw] bg-slate-200"   value={amount2} placeholder='hello' readOnly/></div>

<h3 className="font-bold uppercase">{country2}</h3>
      <img   src={`https://flagsapi.com/${countryList[country2.toUpperCase()]}/flat/64.png`} alt="" />
      <input type="text" className="w-[30vw] bg-slate-200" placeholder='Country name' value={country2} onChange={handleonchange2}/>
      <ul>
        {suggestion.map((country) => (
          <li  onClick={()=>{setCountry2(country.toLowerCase())}}  className="bg-slate-300 border-b-4" key={country}>{country}</li>
        ))}
      </ul>
      </div>
      </div>
        </div>
     

     

</div>
      
  )
}
