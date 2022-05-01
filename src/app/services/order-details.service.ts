import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  //device details
  deviceDetails = [
    {
      id:1,
      deviceName:"pc-hp",
      deviceDetails:"Windows 11 FamilleIntel® Core™ i516 Go RAM512 Go Disque SSD14 FHDCarte graphique Intel® Iris® Xᵉ",
      devicePrice:1890,
      deviceImg:"https://www.hp.com/fr-fr/shop/Html/Merch/Images/c06935002_390x286.jpg"
    },
    {
      id:2,
      deviceName:"pc-lenovo",
      deviceDetails:"Écran 11.6 HD - Processeur: Intel Celeron N4020 (1.10 GHz up to 2.80 GHz  4Mo de mémoire cache, Dual-Core) - Système exploitation: FreeDos - Mémoire RAM: 4 Go DDR4-2400 - Disque Dur: 128 Go SSD - Carte Graphique: Intel HD Graphics avec Wi-Fi, Bluetooth, 2x USB 3.2 Gen 1, 1x HDMI 1.4, 1x prise combo casque/micro (3,5 mm) et lecteur de carte - Couleur: Gris - Garantie: 1 an",
      devicePrice:2150,
      deviceImg:"https://www.mega.tn/assets/uploads/img/pr_ordinateur_portable/1625223811_432.jpg"
    },
    
    {
      id:3,
      deviceName:"Smartphone BENCO Y30 1Go ",
      deviceDetails:"Écran 15.6 HD - Processeur: Intel Core i3-1115G4 (4,10 GHz Turbo max, 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos (Ubuntu) - Mémoire RAM: 4 Go DDR4 - Disque dur: 1 To - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, USB 3.2 Type-A Gen 1, HDMI et RJ-45 - Couleur: Noir - Garantie: 1 an",
      devicePrice:229,
      deviceImg:"https://mk-media.mytek.tn/media/catalog/product/cache/9c5129f729280efd61dc2c3fb7aaab1d/b/i/bison-gt-byellow_286.jpg"
    },
    {
      id:4,
      deviceName:"pc-dell",
      deviceDetails:"Écran water drop 5.71 HD - Processeur: Unisoc SC7731e, Quad-core (4×ARM Cortex-A7) - Systéme d'exploitation: Android 9.0 Pie - Mémoire RAM: 1Go - Stockage: 32Go - caméra arrière: Dual 5MP, ouverture f/1.7 , flash, Appareil Photo Frontale: 5MP, capteur de pixels de 1,34 μm, ouverture f/1,7 - Connectivité: Wifi 3G et Bluetooth - Batterie: 2500mAh - Capteur d'empreintes digitales - Couleur:Bleu Peacock - Garantie: 1 an",
      devicePrice:1329,
      deviceImg:"https://www.wiki.tn/3464/pc-portable-dell-inspiron-5558-i5-8-go-blanc.jpg"
    },
    {
      id:5,
      deviceName:"pc-dell",
      deviceDetails:"Écran 6.82 LCD IPS (720 x 1640 Pixels) - Processeur: Mediatek Helio G85 Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) - Système d'exploitation: Android 11 - Mémoire RAM: 4Go - Stockage: 64 Go - Appareil Photo Arriére: Triple 48MP + 2MP + AI Lens avec Quad flash arrière et Appareil Photo Frontale: 8.0 MP avec double Flash - Connctivité: 4G, Wifi et Bluetooth - Batterie: Li-Po 6000 mAh - Capteur d'empreintes digitales - Double SIM - Couleur: Violet - Garantie: 1 an",
      devicePrice:2099,
      deviceImg:"https://www.tunisianet.com.tn/66986-large/pc-portable-dell-inspiron-5559-i5-6e-gen-8-go-noir.jpg"
    },
    {
      id:6,
      deviceName:"SMARTPHONE INFINIX HOT 10S 64GO - VIOLET",
      deviceDetails:"Ecran 6.49 HD+ (1560 x 720 Pixels) - Processeur: MediaTek, Helio P20, Octa-Core (4x Cortex-A53, 2,3 GHz et 4x Cortex-A53, 1,64 GHz) - Systéme d'exploitation: Android 10 - Mémoire RAM: 4 Go - Stockage: 64 Go - Appareil Photo Arriére: Quad Pixels 16.0 MP + 8.0 MP + 5.0 MP + 5.0 MP et Frontale 16.0 MP - Connectivité: 4G, Wifi et Bluetooth - Double SIM - Capacité Batterie: 4150 mAh - Empreinte digitale, Reconnaissance faciale - Couleur: Gris - Garantie: 1 an",
      devicePrice:429,
      deviceImg:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/s/a/sans-titre-23.jpg"
    },


  ]
}
