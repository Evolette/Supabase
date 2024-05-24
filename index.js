const express = require('express')
const { createClient } = require ('@supabase/supabase-js')

const supabase = createClient('https://xamxrhyymopwhcvxrvoc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbXhyaHl5bW9wd2hjdnhydm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1NzQzNzAsImV4cCI6MjAzMjE1MDM3MH0.yJhlKE8YH3LW0YsqI2eq_yHgJkbGgo1yuU6ObKIM4HU')




const app = express()
const port = 3000

app.get("/Books", async (req, res) => {
    try {
      const { data, error } = await supabase.from("Books").select(); 
      console.log(data);
      return res.send(data);
    } catch (error) {
      return res.send({ error });
    }
  });


//CRUD - CREATE(INSERT), READ(SELECT), UPDATE, DELETE

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})