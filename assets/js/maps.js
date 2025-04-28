function updateMap() {
    const wilayaSelect = document.getElementById('wilayaMapSelect');
    const mapIframe = document.getElementById('map-iframe');
    const addressText = document.getElementById('address-text');
  
    const mapUrls = {
      alger: {
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.211174237685!2d3.104165315307849!3d36.69305627997262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad3d10bcd33b%3A0x2c192dbcb2cfb321!2sPackers+delivery!5e0!3m2!1sen!2sdz!4v1634567890123',
        address: 'P35P+29J, Rue Ferhat Abbas, Djasr Kasentina'
      },
      boumerdes: {
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.702430694535!2d3.4561066113168377!3d36.753713072144684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e69294b86e7d3%3A0x7d7e5f1c396054f5!2sDanimer%20Parcel!5e0!3m2!1sfr!2sdz!4v1745605289399!5m2!1sfr!2sdz ',
        address: 'cité 11 decembre 1960 coopérative 2eme tranche, N106, Boumerdès 35000'
      },
      tipaza: {
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.5463124415714!2d2.461115148585018!3d36.589149401124516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f81001cff8051%3A0x4c4a3a13c6bb4310!2sPackers%20delivery%20tipaza!5e0!3m2!1sfr!2sdz!4v1745605186665!5m2!1sfr!2sdz',
        address: 'HFQ8+M9H, Tipaza'
      },
      blida: {
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.5039874742133!2d2.819383511303511!3d36.469541572227854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0d0023d02be9%3A0x559a60c38ec02a99!2sPackers%20Delivery%20Blida!5e0!3m2!1sfr!2sdz!4v1745605011928!5m2!1sfr!2sdz",
        
        address: 'FR9C+XX3, bab el sebt'
      },
      medea: {
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.5039874742133!2d2.819383511303511!3d36.469541572227854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f6b2c4e1b470b%3A0x28d9784b0056a566!2sPackers%20Delivery%20Medea!5e0!3m2!1sfr!2sdz!4v1745605091773!5m2!1sfr!2sdz',
        address: '7Q96+M49, Takhabit, Médéa 26000'
      }
    };
  
    const selectedWilaya = wilayaSelect.value;
    mapIframe.src = mapUrls[selectedWilaya].url;
    addressText.textContent = mapUrls[selectedWilaya].address;
  }
  