const days = [
    {
      day: "Day 1",
      meals: [
        {
          title: "Breakfast",
          items: [
            "One serving of Upma (semolina cooked with vegetables)",
            "One boiled egg",
            "One cup of chai (black tea with milk and spices)",
          ],
          images:[
            "https://images.aws.nestle.recipes/original/ba32df908435796279e3d79f0d5fbdc1_Rava_Upma_-_Twist.jpg",
            "https://www.allrecipes.com/thmb/sKJTyo6t9cRUaCr6mqvqUdXmt3w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9188544-1a3585fc8f3541c1891081af005ef7ff.jpg",
            "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 340 calories, 17 grams protein, 43 grams carbohydrates, 12 grams fat",
        },
        {
          title: "Snack",
          items: [
            "One small bowl of sprouts salad",
            "One small bowl of cucumber and tomato raita (yogurt dip)",
          ],
          images:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPg0vOxzk3o5bIimQOLZtPudqKP_mY8Zu0kg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hAr2zq4l9FUxgPPVJEg7aV1DzbRGY8HKEySQKy7n7g&s"
          ],
          macronutrients:
            "Macronutrients: approximately 320 calories, 15 grams protein, 45 grams carbohydrates, 10 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "One serving of Chicken Biryani (spiced rice with chicken)",
            "One serving of cucumber and mint raita",
          ],
          images:[
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg",
            "https://i0.wp.com/spicechronicles.com/wp-content/uploads/2015/08/Classic-Cucumber-Raita_650.jpg?ssl=1"
          ],
          macronutrients:
            "Macronutrients: approximately 400 calories, 25 grams protein, 50 grams carbohydrates, 15 grams fat",
        },
        {
          title: "Snack",
          items: ["One small bowl of fruit chaat (mixed fruits with spices)"],
          images:[
            "https://www.teaforturmeric.com/wp-content/uploads/2024/03/Fruit-Chaat-05.jpg",
          ],
          macronutrients:
            "Macronutrients: approximately 300 calories, 3 grams protein, 70 grams carbohydrates, 1 gram fat",
        },
        {
          title: "Dinner",
          items: [
            "One serving of Dal Tadka (lentil curry)",
            "One serving of vegetable pulao (spiced rice with mixed vegetables)",
          ],
          images:[
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/dal-tadka-recipe.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiL_6WGPxwLbs8_rsbiFEIK9euj96NpA4rg3Jd4Nziw&s"
          ],
          macronutrients:
            "Macronutrients: approximately 380 calories, 15 grams protein, 55 grams carbohydrates, 10 grams fat",
        },
      ],
    },
    {
      day: "Day 2",
      meals: [
        {
          title: "Breakfast",
          items: [
            "One serving of whole-wheat toast with 2 tablespoons almond butter",
            "One small bowl of mixed fruit chaat (assorted fruits with spices)",
          ],
          images:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDheVKyVLjQXyn9mKJatwuLS8mxq0o-ZqcDQ4_H-lyg&s",
            "https://www.teaforturmeric.com/wp-content/uploads/2024/03/Fruit-Chaat-05.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 390 calories with 12 grams protein, 52 grams carbohydrates, and 16 grams fat",
        },
        {
          title: "Snack",
          items: [
            "One 7-ounce container of 2% plain Greek yogurt with a handful of sliced almonds",
          ],
          images:[
            "https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323169/greek-yoghurt-in-bowl.jpg",
            "https://www.health.com/thmb/xklPFBrlPpwcHND_ov5EZwLHAwc=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/almonds-GettyImages-683814187-2000-44a06e730fac4c60a10cbb5f9642b589.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 200 calories, 20 grams protein, 10 grams carbohydrates, 9 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "Chicken Tikka Wrap (6 ounces of grilled chicken tikka, lettuce, tomato, and mint yogurt sauce wrapped in whole wheat flatbread)",
          ],
          images:[
            "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Chicken_Tikka_Wrap_Recipes.jpg",
          ],
          macronutrients:
            "Macronutrients: approximately 520 calories, 55 grams protein, 35 grams carbohydrates, 18 grams fat",
        },
        {
          title: "Snack",
          items: ["One small bowl of roasted chickpeas", "One small piece of dark chocolate"],
          images:[
            "https://www.gimmesomeoven.com/wp-content/uploads/2022/06/Roasted-Chickpeas-Recipe-5.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JAeBB5xHHH07bFfDaIVQ2sTWCOOh3P5PZaccId1lrg&s"
          ],
          macronutrients:
            "Macronutrients: Approximately 220 calories, 8 grams protein, 30 grams carbohydrates, 8 grams fat",
        },
        {
          title: "Dinner",
          items: [
            "5-ounce Tandoori Chicken Breast (marinated in yogurt and spices)",
            "One serving of vegetable biryani (spiced rice with mixed vegetables)",
            "One serving of cucumber raita (yogurt dip with cucumber and mint)",
          ],
          images:[
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0cBdhK0DFuDETN9HEjWP2CzDafHAjNi7wuXOuzxA0V0hyphenhyphenQpWex3-B3W5dHzlo3P2lgXzjCdVOmxG9EPFqpvfovCSRjl-hUz-8OtISuTLg1Yv83kfRfe8dABuFsltz_Uy2fxUn95bnHq4/s800/SSWF-TandooriChickenMM1.jpg",
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg",
            "https://www.teaforturmeric.com/wp-content/uploads/2024/03/Fruit-Chaat-05.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 620 calories, 50 grams protein, 55 grams carbohydrates, 20 grams fat",
        },
      ],
    },
    {
      day: "Day 3",
      meals: [
        {
          title: "Breakfast",
          items: [
            "Masala Oats (oats cooked with spices like cumin, turmeric, and coriander)",
            "One cup of masala chai (spiced tea with milk)",
          ],
          images:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDglJvFVVPedZLIKySPJ0biBIgOlHQaoCxWNa1JPJQlA&s",
            "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 420 calories with 12 grams protein, 70 grams carbohydrates, 10 grams fat",
        },
        {
          title: "Snack",
          items: ["One fresh mango", "A handful of cashew nuts"],
          images:[
            "https://5.imimg.com/data5/FH/FZ/UI/SELLER-86819125/25.jpg",
            "https://m.media-amazon.com/images/I/61jwlY2RseL.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 280 calories, 5 grams protein, 40 grams carbohydrates, 12 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "Vegetable Upma (semolina cooked with mixed vegetables)",
            "One boiled egg",
            "1/2 avocado, mashed",
            "One medium orange",
          ],
          images:[
            "https://images.aws.nestle.recipes/resized/ba32df908435796279e3d79f0d5fbdc1_Rava_Upma_-_Twist_944_531.jpg",
            "https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs.jpg",
            "https://www.chopchopfamily.org/wp-content/uploads/2020/02/49521426783_49ea119cd4_c.jpg",
            "https://www.medicalmedium.com/blog-images-optimised/oranges-perfect-food.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 400 calories, 13 grams protein, 50 grams carbohydrates, 18 grams fat",
        },
        {
          title: "Snack",
          items: [
            "One small bowl of cucumber and tomato salad with chaat masala (spiced salad)",
            "A handful of roasted peanuts",
          ],
          images:[
            "https://www.homemadeinterest.com/wp-content/uploads/2022/05/Tomato-Cucumber-Salad_2022_IG-2-1.jpg",
            "https://thekitchenbucketlist.com/wp-content/uploads/2021/06/AF-roasted-simple-peanuts-15.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 150 calories, 5 grams protein, 15 grams carbohydrates, 9 grams fat",
        },
        {
          title: "Dinner",
          items: [
            "One serving of Veggie Pulao (spiced rice with mixed vegetables)",
            "One serving of Tandoori Paneer Tikka (marinated paneer cubes grilled with spices)",
            "A side of cucumber raita (yogurt dip with cucumber and mint)",
          ],
          images:[
            "https://kitchenmai.com/wp-content/uploads/2022/10/veg_pulao_blog.jpg",
            "https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg",
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/03/cucumber-raita.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 530 calories, 25 grams protein, 45 grams carbohydrates, 25 grams fat",
        },
      ],
    },
    {
      day: "Day 4",
      meals: [
        {
          title: "Breakfast",
          items: [
            "Two slices of whole wheat toast with 2 tablespoons almond butter",
            "One small bowl of sliced mango",
          ],
          images:[
            "https://media.self.com/photos/5a2986e86c2fc24013a0a805/master/pass/0617-chia-almond-butter-toast.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2021/4/QP/YB/YG/126668561/a1-quality-mango-500x500.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 450 calories with 12 grams protein, 65 grams carbohydrates, and 18 grams fat",
        },
        {
          title: "Snack",
          items: ["One cup of sliced pineapple", "A small handful of cashew nuts"],
          images:[
            "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2020-02-22/Pineapple_Slices_1.jpg",
            "https://nutsandmore.in/wp-content/uploads/2020/07/20201210_162312-min-scaled.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 280 calories, 5 grams protein, 35 grams carbohydrates, 15 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "Chickpea Salad Wrap (cooked chickpeas mixed with veggies, wrapped in a whole wheat tortilla)",
            "1/2 sliced avocado",
          ],
          images:[
            "https://healthiersteps.com/wp-content/uploads/2018/03/chickpea-salad-wrap-main.jpg",
            "https://media.istockphoto.com/id/179301015/photo/close-up-of-fresh-ripe-avocado-slices-on-white-background.jpg?s=612x612&w=0&k=20&c=LSGBs32WzLdfwZ-zDyZ5ocU3GiwZxrMbk96thjm3Ykk="
          ],
          macronutrients:
            "Macronutrients: approximately 500 calories, 20 grams protein, 55 grams carbohydrates, 22 grams fat",
        },
        {
          title: "Snack",
          items: ["One small bowl of cucumber and carrot sticks with hummus"],
          images:[
            "https://t4.ftcdn.net/jpg/03/35/56/73/360_F_335567354_6L6RXkUMJDnGbk1rAsEelywoeYoZMb3J.jpg",
          ],
          macronutrients:
            "Macronutrients: approximately 150 calories, 5 grams protein, 20 grams carbohydrates, 7 grams fat",
        },
        {
          title: "Dinner",
          items: [
            "One serving of Veggie Masala (mixed vegetables cooked with Indian spices)",
            "One serving of Quinoa Pulao (quinoa cooked with mixed vegetables)",
          ],
          images:[
            "https://glutenfreeandmore.com/wp-content/uploads/2022/03/Veggie-Masala.jpg",
            "https://www.kannammacooks.com/wp-content/uploads/quinoa-pulao-with-loaded-vegetables-glutenfree-vegan-recipe-1-2.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 480 calories, 15 grams protein, 70 grams carbohydrates, 15 grams fat",
        },
      ],
    },
    {
      day: "Day 5",
      meals: [
        {
          title: "Breakfast",
          items: [
            "One serving of Masala Dosa (fermented crepe made from rice batter, filled with spiced potato filling)",
          ],
          images:[
            "https://holycowvegan.net/wp-content/uploads/2014/04/quick-masala-dosa-7.jpg",
          ],
          macronutrients:
            "Macronutrients: approximately 450 calories with 10 grams protein, 70 grams carbohydrates, and 15 grams fat",
        },
        {
          title: "Snack",
          items: [
            "One small bowl of cucumber and carrot sticks",
            "A small portion of homemade mint chutney for dipping",
          ],
          images:[
            "https://t4.ftcdn.net/jpg/03/35/56/73/360_F_335567354_6L6RXkUMJDnGbk1rAsEelywoeYoZMb3J.jpg",
            "https://vegecravings.com/wp-content/uploads/2017/03/mint-chutney-recipe-step-by-step-instructions.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 100 calories, 2 grams protein, 10 grams carbohydrates, 6 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "Chickpea Salad Wrap (cooked chickpeas mixed with veggies, wrapped in a whole wheat tortilla)",
            "One sliced apple",
          ],
          images:[
            "https://www.budgetbytes.com/wp-content/uploads/2019/01/Open-Sriracha-Chickpea-Salad-Wrap.jpg",
            "https://www.thespruceeats.com/thmb/H0hAInnbM7ExZWw90jd1mypm4Rc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-how-to-keep-apples-from-turning-brown-7495453-hero-01-9b001252f20d4f6d9d0bbf4511d62183.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 500 calories, 20 grams protein, 55 grams carbohydrates, 22 grams fat",
        },
        {
          title: "Snack",
          items: ["One serving of Masala Chai (spiced tea with milk and sugar)"],
          images:[
            "https://www.seema.com/wp-content/uploads/2022/07/Masala-Chai.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 100 calories, 2 grams protein, 10 grams carbohydrates, 5 grams fat",
        },
        {
          title: "Dinner",
          items: [
            "One serving of Tandoori Grilled Tofu",
            "One serving of vegetable biryani (spiced rice with mixed vegetables)",
            "A small side of cucumber raita (yogurt dip with cucumber and mint)",
          ],
          images:[
            "https://i0.wp.com/www.alisonsallspice.com/wp-content/uploads/2020/09/Grilled-Tofu-with-Tandoori-Yogurt-Sauce.jpg?resize=600%2C727",
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg",
            "https://static.toiimg.com/thumb/58295233.cms?imgsize=593248&width=800&height=800"
          ],
          macronutrients:
            "Macronutrients: approximately 550 calories, 25 grams protein, 65 grams carbohydrates, 20 grams fat",
        },
      ],
    },
    {
      day: "Day 6",
      meals: [
        {
          title: "Breakfast",
          items: [
            "One serving of Masala Omelette (omelette cooked with onions, tomatoes, and spices)",
            "One small bowl of sliced papaya",
          ],
          images:[
            "https://realfood.tesco.com/media/images/Masala-Omelette-h-2e42fca1-2230-48f7-ba0c-7d1608e17cb0-0-472x310.jpg",
            "https://www.eatingwell.com/thmb/Plfziwlln4M1ZO-AMyy8eI9PriA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cut-papaya-cubes-2-38181e4fe4244e96aa05c6040d637c35.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 320 calories with 25 grams protein, 20 grams carbohydrates, and 15 grams fat",
        },
        {
          title: "Snack",
          items: ["A small bowl of sprouts chaat (mixed sprouts with spices)"],
          images:[
            "https://www.vegrecipesofindia.com/wp-content/uploads/2016/02/moong-sprouts-chaat-recipe-1-500x375.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 100 calories, 5 grams protein, 15 grams carbohydrates, 2 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "Vegetable Paratha (whole wheat flatbread stuffed with spiced mashed vegetables)",
            "One serving of cucumber raita (yogurt dip with cucumber and mint)",
          ],
          images:[
            "https://nishamadhulika.com/imgpst/featured/jumbo_paratha.jpg",
            "https://myfoodstory.com/wp-content/uploads/2022/05/Cucumber-Raita-1.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 500 calories, 15 grams protein, 65 grams carbohydrates, 20 grams fat",
        },
        {
          title: "Snack",
          items: ["A small bowl of mixed nuts and dried fruits"],
          images:[
            "https://d3kgrlupo77sg7.cloudfront.net/media/houseofprakriti.com/images/products/np-dsc8312-20210311-220443-cropped.20210319211826.webp"
          ],
          macronutrients:
            "Macronutrients: approximately 200 calories, 5 grams protein, 20 grams carbohydrates, 12 grams fat",
        },
        {
          title: "Dinner",
          items: [
            "One serving of Tandoori Grilled Chicken",
            "One serving of Jeera Rice (rice cooked with cumin seeds)",
            "A side of mixed vegetable curry",
          ],
          images:[
            "https://thewoksoflife.com/wp-content/uploads/2016/07/grilled-tandoori-chicken-12.jpg",
            "https://www.allrecipes.com/thmb/alHgkjuvAolyNqFAJfbOLH2JeoA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FranceCevallos_JeeraRice_Alternate-a0ef3c42b8e94ac38867d3e762262ab4.JPG",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugBmebtFzsJ9BgmMjthU1XS4cG7Z3Ff9uOXPkzm_aoA&s"
          ],
          macronutrients:
            "Macronutrients: approximately 450 calories, 30 grams protein, 45 grams carbohydrates, 15 grams fat",
        },
      ],
    },
    {
      day: "Day 7",
      meals: [
        {
          title: "Breakfast",
          items: [
            "One serving of Upma (savory semolina porridge with vegetables and spices)",
            "A small side of coconut chutney",
          ],
          images:[
            "https://myfoodstory.com/wp-content/uploads/2022/11/Vegetable-Upma-3-500x375.jpg",
            "https://www.mrishtanna.com/wp-content/uploads/2020/01/coconut-chutney.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 450 calories, 15 grams protein, 60 grams carbohydrates, 20 grams fat ",
        },
        {
          title: "Snack",
          items: [
            "One serving of Mango Lassi (yogurt-based smoothie with mango and a hint of cardamom)",
          ],
          images:[
            "https://www.teaforturmeric.com/wp-content/uploads/2021/07/Mango-Lassi-Recipe-Card-1.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 250 calories, 10 grams protein, 35 grams carbohydrates, 8 grams fat",
        },
        {
          title: "Lunch",
          items: [
            "6-ounce baked chicken breast marinated in tandoori spices",
            "One serving of Vegetable Pulao (spiced rice with mixed vegetables)",
            "A side of cucumber raita (yogurt dip with cucumber and mint)",
          ],
          images:[
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/tandoori-chicken.jpg.webp",
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/pulao-recipe-480x270.jpg",
            "https://assets.epicurious.com/photos/57a37519c9298e5449591909/master/pass/cucumber-raita.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 700 calories, 45 grams protein, 60 grams carbohydrates, 30 grams fat",
        },
        {
          title: "Snack",
          items: [
            "A small bowl of mixed fruit chaat (assorted fruits with spices)",
          ],
          images:[
            "https://myheartbeets.com/wp-content/uploads/2018/06/fruit-chaat-indian-fruit-salad.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 150 calories, 2 grams protein, 35 grams carbohydrates, 1 gram fat",
        },
        {
          title: "Dinner",
          items: [
            "One serving of Fish Curry (fish cooked in a spicy and tangy sauce)",
            "One serving of Jeera Rice (rice cooked with cumin seeds)",
            "A side of steamed green beans",
          ],
          images:[
            "https://www.priyom.in/wp-content/uploads/2022/05/recipe-3.png",
            "https://delishbite.in/wp-content/uploads/2023/07/Blog_1-3-500x375.jpg?crop=1",
            "https://cooktoria.com/wp-content/uploads/2023/01/Steamed-Green-Beans-SQ-1.jpg"
          ],
          macronutrients:
            "Macronutrients: approximately 500 calories, 30 grams protein, 60 grams carbohydrates, 15 grams fat",
        },
      ],
    }    
  ];

  export default days;