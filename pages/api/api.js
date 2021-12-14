// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const proba = { userName: 'Adrián' }

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  res.statusCXode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(proba))
}
