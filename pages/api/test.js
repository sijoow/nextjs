export default function handler(res,req){
  console.log(req.query)
  return req.status(200).json('하나')  
}
