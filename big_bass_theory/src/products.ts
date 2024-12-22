const fishingProducts = [
    {
        id: "price_1QXzbOB4LoFmb9NB9GSFv3op",
        name: "No Dink Pink",
        tag: "Hot pink worm baits to lure in.",
        price: 4.99,
        modalInfo: "No Dink Pink worm baits are brightly colored fishing lures shaped like worms, featuring a vivid hot pink hue that stands out in the water. Their eye-catching design and realistic worm-like shape make them highly effective at attracting a variety of fish species.",
        link: "https://buy.stripe.com/test_fZe5m20KC7uI16E9AB",
        pic: "../public/NoDinkPink.png"
    },
    {
        id: "price_1QXzcsB4LoFmb9NB2tKxWjBS",
        name: "Big Bass Blue",
        tag: "Bright blue worm baits to lure in.",
        price: 4.99,
        modalInfo: "Big Bass Blue worm baits are brightly colored fishing lures shaped like worms, featuring a vivid cyan/blue hue that stands out amongst the natural flora of the lake. Their eye-catching design and realistic worm-like shape make them highly effective at attracting a variety of fish species (especially big bass!).",
        link: "https://buy.stripe.com/test_3cs29QeBs7uI02AaEG",
        pic: "../public/BigBassBlue.png"
    },
    {
        id: "price_1QXzdwB4LoFmb9NBNE4Pxkk7",
        name: "Green Machine",
        tag: "Green worm baits to lure in.",
        price: 4.99,
        modalInfo: "Green Machine worm baits are colored fishing lures shaped like worms, featuring a dark green hue that stands out in the water. Their dark hue works especially in murky and deep waters, making them highly effective at attracting a variety of fish species.",
        link: "https://buy.stripe.com/test_aEUeWCdxo02g6qY28b",
        pic: "../public/GreenMachine.png"
    },
    {
        id: "price_1QXzenB4LoFmb9NBqLlwqppC",
        name: "Fluke White",
        tag: "Bright white worm baits to lure in.",
        price: 4.99,
        modalInfo: "Fluke White worm baits are brightly colored fishing lures shaped like worms, featuring a bright white hue that stands out in the water. Their eye-catching design and realistic worm-like shape make them highly effective at attracting a variety of fish species, especially on those brighter days.",
        link: "https://buy.stripe.com/test_5kAbKqbpgeXaaHe4gk",
        pic: "../public/FlukeWhite.png"
    }
]

const apparelProducts = [
    {
        id: "price_1QXzsaB4LoFmb9NBv7lu6Q48",
        name: "Unisex Heavy Cotton Tee BBT Logo - Dark Heather",
        tag: "Comfortable cotton tee with BBT logo.",
        price: +25.80.toFixed(2),
        modalInfo: "Made with 100% US-grown cotton, this classic-fit tee provides all-day comfort and long-lasting durability. Its eco-friendly materials ensure sustainability while offering a timeless style.",
        link: "https://buy.stripe.com/test_00g6q62SKaGU6qY4gl",
        pic: "../public/BBTShirtGrey.png"
    },
    {
        id: "price_1QXzt6B4LoFmb9NBATywPvEv",
        name: "Unisex Heavy Cotton Tee BBT Logo - Natural",
        tag: "Comfortable cotton tee with BBT logo.",
        price: +25.80.toFixed(2),
        modalInfo: "Crafted from 100% ethically sourced cotton, this durable tee combines comfort with environmental responsibility. Its soft fabric and classic fit make it perfect for casual or outdoor wear.",
        link: "https://buy.stripe.com/test_6oEdSy2SK02g7v24gm",
        pic: "../public/BBTShirtNatural.png"
    },
    {
        id: "price_1QXzu4B4LoFmb9NB6P4g6j0K",
        name: "Unisex Heavy Cotton Tee BBT Logo - Heather Military Grey",
        tag: "Comfortable cotton tee with BBT logo.",
        price: +25.80.toFixed(2),
        modalInfo: "Designed with eco-consciousness in mind, this 100% US-grown cotton tee is lightweight yet highly durable. Its timeless design and ethical sourcing ensure comfort with a cause.",
        link: "https://buy.stripe.com/test_aEU15M64WeXaaHe8wD",
        pic: "../public/BBTShirtGreen.png"
    },
    {
        id: "price_1QXzvyB4LoFmb9NB0oJGpKaE",
        name: "Unisex Heavy Cotton Tee BBT Newspaper - Ash",
        tag: "Ash-colored tee with a newspaper design.",
        price: +25.80.toFixed(2),
        modalInfo: "This soft, US-grown cotton tee is ethically crafted and designed for lasting comfort. Its eco-friendly production reflects a commitment to sustainability and high-quality wear.",
        link: "https://buy.stripe.com/test_00g15Mbpg4iw5mU28g",
        pic: "../public/BBTNewspaperWhite.png"
    },
    {
        id: "price_1QXzwaB4LoFmb9NBkPjse5ua",
        name: "Unisex Heavy Cotton Tee BBT Newspaper - Heather Military Grey",
        tag: "Heather Military Grey tee with newspaper design.",
        price: +25.80.toFixed(2),
        modalInfo: "Made from 100% US cotton, this tee ensures comfort and eco-friendly sustainability. Its durable fabric and stylish design make it ideal for everyday wear.",
        link: "https://buy.stripe.com/test_00gcOu2SKcP26qYcMV",
        pic: "../public/BBTNewspaperGreen.png"
    },
    {
        id: "price_1QXzyFB4LoFmb9NB6FfvrpfW",
        name: "Unisex Heavy Blend Crewneck Shirt - Sport Grey",
        tag: "Soft crewneck in Sport Grey color.",
        price: 29.37,
        modalInfo: "This cozy crewneck features a durable 50/50 cotton-polyester blend with reinforced stitching for maximum comfort and long-lasting wear. Ethically made with OEKO-TEX-certified dyes, ensuring eco-conscious production.",
        link: "https://buy.stripe.com/test_00gaGm8d4g1eg1ybIS",
        pic: "../public/BBTCrewneckGrey.png"
    },
    {
        id: "price_1QXzylB4LoFmb9NBQyy6Masf",
        name: "Unisex Heavy Blend Crewneck Shirt - Military Green",
        tag: "Soft crewneck in Military Green color.",
        price: 29.37,
        modalInfo: "Crafted from a sustainable 50/50 cotton-polyester blend, this heavy-blend crewneck offers warmth and durability for colder months. Made using ethically grown US cotton with eco-certified dyes for reduced environmental impact.",
        link: "https://buy.stripe.com/test_6oE9Cictk16k5mU4gr",
        pic: "../public/BBTCrewneckGreen.png"
    },
    {
        id: "price_1QY009B4LoFmb9NBiGWwLE7l",
        name: "Stainless Steel Water Bottle - 12oz",
        tag: "Compact 12oz water bottle for hydration.",
        price: 38.13,
        modalInfo: "Made from 100% stainless steel with a polypropylene lid, this 12oz water bottle is BPA-free and built to last. Its double-wall construction ensures drinks stay cold or hot for hours.",
        link: "https://buy.stripe.com/test_28o29Q0KC2ao5mU7sE",
        pic: "../public/BBTWaterBottle.png"
    },
    {
        id: "price_1QY00eB4LoFmb9NBrlIFyLxJ",
        name: "Stainless Steel Water Bottle - 18oz",
        tag: "18oz water bottle for extended hydration.",
        price: 40.32,
        modalInfo: "This 18oz stainless steel water bottle is BPA-free, featuring a twist-on lid and double-wall insulation. Its durable materials keep drinks at the perfect temperature throughout the day.",
        link: "https://buy.stripe.com/test_00gcOubpg5mA16E7sF",
        pic: "../public/BBTWaterBottle.png"
    },
    {
        id: "price_1QY01xB4LoFmb9NBW4Q7hpXr",
        name: "Unisex College Hoodie - Steel Grey",
        tag: "Cozy hoodie in Steel Grey color.",
        price: 50.27,
        modalInfo: "Crafted with an 80% cotton and 20% polyester blend, this medium-heavy hoodie provides warmth, comfort, and lasting durability. Its ethical certifications ensure sustainable and responsible production.",
        link: "https://buy.stripe.com/test_4gwg0G50S9CQ9DaaES",
        pic: "../public/BBTHoodieDarkGrey.png"
    },
    {
        id: "price_1QY02TB4LoFmb9NB8ZRTATyy",
        name: "Unisex College Hoodie - Heather Grey",
        tag: "Classic hoodie in Heather Grey color.",
        price: 50.27,
        modalInfo: "Made with a medium-heavy fabric blend of 80% cotton and 20% polyester, this hoodie delivers all-day warmth and comfort. Certified by WRAP, Sedex, and PETA, it's both stylish and sustainably made.",
        link: "https://buy.stripe.com/test_bIYcOu1OG16kaHeaET",
        pic: "../public/BBTHoodieLightGrey.png"
    }
]

function getFishingData(id: string): undefined | typeof fishingProducts[0] {
    let productData = fishingProducts.find(product => product.id === id)

    if (productData == undefined) {
        return undefined
    }

    return productData
}

function getApparelData(id: string): undefined | typeof apparelProducts[0] {
    let productData = fishingProducts.find(product => product.id === id)

    if (productData == undefined) {
        return undefined
    }

    return productData
}


export { fishingProducts, apparelProducts, getFishingData, getApparelData }