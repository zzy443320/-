export default {
  getFleetData: () => {
    return {
      code: 200,
      data: {
        fleetData: [
          {
            sn: 1,
            fleetName: 'Red BULL',
            number: 276,
            iconSrc: new URL("@/assets/image/fleet-icon1.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car1.png", import.meta.url).href
          },
          {
            sn: 2,
            fleetName: 'Ferarri',
            number: 252,
            iconSrc: new URL("@/assets/image/fleet-icon2.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car2.png", import.meta.url).href
          },
          {
            sn: 3,
            fleetName: 'Mclaren',
            number: 184,
            iconSrc: new URL("@/assets/image/fleet-icon3.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car3.png", import.meta.url).href
          },
          {
            sn: 4,
            fleetName: 'Mercedes',
            number: 96,
            iconSrc: new URL("@/assets/image/fleet-icon4.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car4.png", import.meta.url).href
          },
          {
            sn: 5,
            fleetName: 'Aston Martin',
            number: 44,
            iconSrc: new URL("@/assets/image/fleet-icon5.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car5.png", import.meta.url).href
          },
          {
            sn: 6,
            fleetName: 'RB',
            number: 24,
            iconSrc: new URL("@/assets/image/fleet-icon6.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car6.png", import.meta.url).href
          },
          {
            sn: 7,
            fleetName: 'Haas',
            number: 7,
            iconSrc: new URL("@/assets/image/fleet-icon7.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car7.png", import.meta.url).href
          },
          {
            sn: 8,
            fleetName: 'Williams',
            number: 2,
            iconSrc: new URL("@/assets/image/fleet-icon8.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car8.png", import.meta.url).href
          },
          {
            sn: 9,
            fleetName: 'Alpine',
            number: 2,
            iconSrc: new URL("@/assets/image/fleet-icon9.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car9.png", import.meta.url).href
          },
          {
            sn: 10,
            fleetName: 'Kick Sauber',
            number: 0,
            iconSrc: new URL("@/assets/image/fleet-icon10.png", import.meta.url).href,
            carSrc: new URL("@/assets/image/car10.png", import.meta.url).href
          },
        ]
      }
    }
  }
}