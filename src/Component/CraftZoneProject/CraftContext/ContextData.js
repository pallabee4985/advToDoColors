import React,{ createContext } from "react";

export let ContextProduct=createContext()
let Product=[
    {
      id: 1,
      name: "DOMS Colour kit",
      price: 520,
      url: " https://rukminim2.flixcart.com/image/416/416/kfbfr0w0/art-set/r/w/h/water-colour-utility-complete-painting-kit-by-the-mark-doms-original-imafvty3wqkhsypf.jpeg?q=70",
      color: "Multicolor ",
      catagory: "ColorTools  ",
      material: "colors",
      feature:true,
      brand: "DOMS ",
      buy: "https://www.flipkart.com/doms-water-colour-utility-complete-painting-kit-mark/p/itm57ea75f8bf9b5?pid=ARTFVSWEKQ8GPRWH&lid=LSTARTFVSWEKQ8GPRWHOM2T7X&marketplace=FLIPKART&q=painting+tools&store=dgv%2Fj6t&spotlightTagId=FkPickId_dgv%2Fj6t&srno=s_1_9&otracker=search&otracker1=search&fm=Search&iid=dbc4e080-46a3-411f-8394-190e3dcc03a0.ARTFVSWEKQ8GPRWH.SEARCH&ppt=sp&ppn=sp&ssid=zn8un8b4f40000001690926227000&qH=ef50a362a0107588 ",
    },
    {
      id: 2,
      name: "sketch color",
      price: 325,
      url: "https://rukminim2.flixcart.com/image/416/416/l3es13k0/sketch-pen/u/v/m/drawing-sketching-set-art-pencils-kit-for-kids-24-piece-pulsbery-original-imagejgefscgpgft.jpeg?q=70 ",
      color: " Multicolor",
      catagory: "ColorTools ",
      material: "plastic",
      feature:false,
      brand: " Pulsbery",
      buy: "https://www.flipkart.com/pulsbery-sketch-colors-kids-nib-pens/p/itmd88ce412705ef?pid=SKPGEJGFWGUJCBBS&lid=LSTSKPGEJGFWGUJCBBSVVU0HD&marketplace=FLIPKART&fm=productRecommendation%2FcrossSelling&iid=R%3Ac%3Bp%3AARTFVSWEKQ8GPRWH%3Bl%3ALSTARTFVSWEKQ8GPRWHOM2T7X%3Bpt%3App%3Buid%3Afe1946e5-30b4-11ee-a38f-f50aa1bfea78%3B.PNSG3EHNUQAFH2QZ&ppt=pp&ppn=pp&ssid=zn8un8b4f40000001690926227000&otracker=pp_reco_Bought%2BTogether_23_35.productCard.PMU_TAB_Pulsbery%2Bsketch%2Bcolors%2Bfor%2Bkids%2Bsketch%2Bcolors%2Bfor%2Bkids%2BNib%2BSketch%2BPens_PNSG3EHNUQAFH2QZ_productRecommendation%2FcrossSelling_3&otracker1=pp_reco_PINNED_productRecommendation%2FcrossSelling_Bought%2BTogether_GRID_productCard_cc_23_NA_view-all&cid=PNSG3EHNUQAFH2QZ",
    },
    {
      id: 3,
      name: "Color Sheets ",
      price: 219,
      url: "https://rukminim2.flixcart.com/image/416/416/kbwjvrk0/art-craft-kit/k/8/z/a4-color-paper-premium-neon-colours-hari-original-imaft4zmejraxhgm.jpeg?q=70 ",
      color: "Multicolor ",
      catagory: "Color-Seets",
      material: "paper",
      feature:false,
      brand: "OFIXO  ",
      buy: "https://rukminim2.flixcart.com/image/416/416/kbwjvrk0/art-craft-kit/k/8/z/a4-color-paper-premium-neon-colours-hari-original-imaft4zmejraxhgm.jpeg?q=70 ",
    },
    {
      id: 4,
      name: "ClayTools",
      price: 399,
      url: "https://rukminim2.flixcart.com/image/416/416/kp2y2kw0/art-craft-kit/q/e/i/11pcs-set-diy-clay-craft-tools-wood-handle-wax-pottery-clay-original-imag3e6rcxzxf5ms.jpeg?q=70 ",
      color: "wooden",
      catagory: "ClayArt",
      brand: "Flywind ",
      material: "wood",
      feature:false,
      buy: "https://www.flipkart.com/flywind-11x-craft-wooden-clay-tools-set-wax-plaster-soap-pottery-modelling/p/itmd547f9fee2933?pid=ACKGKC9FHKKCSG9U&lid=LSTACKGKC9FHKKCSG9U9RC76E&marketplace=FLIPKART&q=clay+set&store=tng%2Fcg5&srno=s_1_22&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&fm=productRecommendation%2FcrossSelling&iid=669bb834-5e1f-402f-9a12-7156d4faa80f.ACKGKC9FHKKCSG9U.SEARCH&ppt=pp&ppn=pp&ssid=t3mkd3elmo0000001690926814957&qH=a806eec2a5ed66f7",
    },
    {
      id: 5,
      name: " Project + Art Kit",
      price: 642,
      url: "https://rukminim2.flixcart.com/image/416/416/xif0q/art-set/m/t/j/-original-imagqzfwvtkeufkm.jpeg?q=70 ",
      color: "mixed ",
      catagory: "ColorTools",
      material: "mix",
      feature:false,
      brand: "DOMS D NAMIX ",
      buy: "https://www.flipkart.com/doms-d-namix-school-project-art-kit/p/itm01275058c5e03?pid=ARTG8XYFKZ9SJ6EZ&lid=LSTARTG8XYFKZ9SJ6EZTML8MT&marketplace=FLIPKART&q=color+set&store=dgv%2Fj6t&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=32da7de8-b278-4db7-b172-6e359256d9c1.ARTG8XYFKZ9SJ6EZ.SEARCH&ppt=sp&ppn=sp&ssid=o52szqnwow0000001690927082094&qH=eaf4fdf42bac5228",
    },
    {
      id: 7,
      name: "Artist Paint Brush ",
      price: 790,
      url: " https://rukminim2.flixcart.com/image/416/416/kyeqjrk0/paint-brush/m/i/c/art-brush-with-palette-knife-acrylic-oil-painting-and-gouache-original-imagancdarmn8gfg.jpeg?q=70",
      color: "yellow ",
      catagory: "PaintingTools ",
      brand: "URBAN BOX  ",
      material: "plastic",
      feature:true,
      buy: "https://www.flipkart.com/urban-box-artist-paint-brush-pop-up-carrying-case-painting-knife-1-sponge/p/itm377c7b21783ca?pid=PBRGGVTFJTFH8BW4&lid=LSTPBRGGVTFJTFH8BW4VHSKCV&marketplace=FLIPKART&q=painting+brush+box&store=dgv%2Fj6t&srno=s_1_13&otracker=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_na&fm=Search&iid=3dcae707-63c9-429a-ad99-4e0901e1f658.PBRGGVTFJTFH8BW4.SEARCH&ppt=pp&ppn=pp&ssid=pz2jl0cc400000001690927423577&qH=e780a4ab8478d24e ",
    },
    {
      id: 8,
      name: "molding dough set",
      price: 280,
      url: "https://rukminim2.flixcart.com/image/416/416/kvgzyq80/art-craft-kit/3/m/j/3-molding-dough-set-fly-buy-original-imag8ckvtnfm7ym5.jpeg?q=70",
      color: "mix",
      catagory: "ClayArt",
      brand: "Fly Buy ",
      material: "clay",
      feature:true,
      buy: "https://www.flipkart.com/fly-buy-molding-dough-set/p/itme208600311e4b?pid=ACKG8CKVFHDU3HYF&lid=LSTACKG8CKVFHDU3HYFHIOSYC&marketplace=FLIPKART&q=molding+clay+set&store=tng%2Fcg5%2Ftzr&srno=s_1_35&otracker=search&otracker1=search&fm=Search&iid=427e0f8d-92bb-4892-a71b-69738300b5fc.ACKG8CKVFHDU3HYF.SEARCH&ppt=pp&ppn=pp&ssid=b5tlqrd99c0000001690927280984&qH=69f20cdf94bc14fa",
    },
  ];

function ContextData({children}) {
  return (
    
        <ContextProduct.Provider value={[...Product]}>
        {children}
        </ContextProduct.Provider>
  )
}

export default ContextData
