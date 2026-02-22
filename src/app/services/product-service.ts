import { Injectable } from '@angular/core';
import { Product } from '../models/productModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { productId: 1, categoryName: 'ana-yemekler', productName: 'Beğendili Köfte', description: 'Beğendi sos üzerinde ızgara köfte yanında parmak patates ve maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 460, image: 'beğendili-köfte-anayemek.jpg' },
    { productId: 2, categoryName: 'ana-yemekler', productName: 'Karışık Izgara', description: 'Marine edilmiş ızgara tavuk eti, ev yapımı kasap köfte, sucuk dilimleri yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 460, image: 'karışık-ızgara-anayemek.jpg' },
    { productId: 3, categoryName: 'ana-yemekler', productName: 'Izgara Tavuk Pirzola', description: 'Marine edilmiş ızgara tavuk eti yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 400, image: 'barbekü-soslu-tavuk-anayemek.jpg' },
    { productId: 4, categoryName: 'ana-yemekler', productName: 'Barbekü Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel barbekü sos, yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'beğendili-köfte-anayemek.jpg' },
    { productId: 5, categoryName: 'ana-yemekler', productName: 'Köri Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel körili kremalı sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'köri-soslu-tavuk-anayemek.jpg' },

    { productId: 6, categoryName: 'kahvaltı', productName: 'Sıcak Kahvaltı', description: '', tooltip: 'En çok satan', price: 350, image: 'sıcak-kahvaltı.jpg' },

    { productId: 7, categoryName: 'burgerler', productName: 'Hawai Burger', description: 'Izgara burger köftesi,  özel soslu mushroom mantar, cheddar sos, karamelize soğan yanında patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 460, image: 'hawai-burger.jpg' },
    { productId: 8, categoryName: 'burgerler', productName: 'Smash Burger', description: 'Double ızgara burger köftesi cheddar sos, karamelize soğan, yanında patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 610, image: 'smash-burger.jpg' },
    { productId: 9, categoryName: 'burgerler', productName: 'Miami Burger', description: 'Izgara burger köftesi, karamelize soğan, mayonezli isli köz patlıcan, rosebeef dilimleri yanında patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 460, image: 'miami-burger.jpg' },
    { productId: 10, categoryName: 'burgerler', productName: 'Çıtır Tavuk Burger', description: 'Panelenmiş çıtır tavuk pirzola, kornişon turşu, cheddar sos, karamelize soğan, coleslaw salata, yanında  patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 350, image: 'çıtır-tavuk-burger.jpg' },

    { productId: 11, categoryName: 'makarnalar', productName: 'Penne Arabiata', description: 'Haşlanmış penne makarnası, zeytin dilimleri, mısır, jalapeño biber, özel arabiata sos ile servis edilir.', tooltip: 'En çok satan', price: 265, image: 'penne-arabiata-makarna.jpg' },
    { productId: 12, categoryName: 'makarnalar', productName: 'Tagliatalle Alfredo', description: 'Haşlanmış tagliatelle makarnası, jülyen mantar, kremalı özel sos, üzerinde ızgara tavuk ile servis edilir.', tooltip: 'En çok satan', price: 330, image: 'tagliatalle-alfredo-makarna.jpg' },
    { productId: 13, categoryName: 'makarnalar', productName: 'Pesto Soslu Mantarlı Tavuklu Penne', description: 'Haşlanmış penne makarnası, jülyen tavuk dilimleri, jülyen mantar, pesto kremalı özel sos ile servis edilir.', tooltip: 'En çok satan', price: 310, image: 'pesto-soslu-mantarlı-tavuklu-penne-makarna.jpg' },
    { productId: 14, categoryName: 'makarnalar', productName: 'Kremalı Mantarlı Tavuklu Penne', description: 'Haşlanmış penne makarnası, jülyen tavuk dilimleri, jülyen mantar, kremalı özel sos ile servis edilir.', tooltip: 'En çok satan', price: 310, image: 'çıtır-tavuk-burger.jpg' },

    { productId: 15, categoryName: 'salatalar', productName: 'Çıtır Tavuklu Salata', description: 'Taze marul roka ve maydanoz yaprakları küp doğranmış domates ve salatalık dilimleri üzerinde panelenmiş çıtır tavuk parçaları ile servis edilir.', tooltip: 'En çok satan', price: 300, image: 'çıtır-tavuklu-salata.jpg' },
    { productId: 16, categoryName: 'salatalar', productName: 'Peynirli Avakado Salatası', description: 'küp doğranmış avokado beyaz peynir domates salatalık ve mor soğanın muazzam birleşimi nar ekşisi ve zeytinyağı ile servis edilir.', tooltip: 'En çok satan', price: 290, image: 'peynirli-avakado-salatası.jpg' },
    { productId: 17, categoryName: 'salatalar', productName: 'Sezar Salata', description: 'Çıtır göbek marullar, kroton ekmek, özel sezar sos, ızgara tavuk dilimleri, çeri domatesler ile servis edilir.', tooltip: 'En çok satan', price: 310, image: 'sezar-salata.jpg' },

    { productId: 19, categoryName: 'wrapler', productName: 'Çıtır Tavuk Wrap', description: 'Tortilla lavaş arasında çıtır tavuk dilimleri, marul, domates, kornişon turşu, cheddar peyniri yanında patates cips, maskolin salata ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 350, image: 'ton-balıklı-salata.jpg' },
    { productId: 53, categoryName: 'wrapler', productName: 'Tavuklu Wrap', description: 'Tortilla lavaş arasında jülyen tavuk dilimleri, renkli biberler, mantar, rende kaşar peyniri, yanında patates cips, maskolin salata ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 340, image: 'nophoto.jpg' },

    { productId: 20, categoryName: 'kruvasan-sandwichler', productName: 'Peynirli Kruvasan', description: 'Tereyağlı kruvasan arasında kremamsı labne,  kaşar peyniri, tulum peyniri ve beyaz peynirin üzerinde domates ve roka yaprakları ile servis edilir.', tooltip: 'En çok satan', price: 265, image: 'peynirli-kruvasan.jpg' },
    { productId: 21, categoryName: 'kruvasan-sandwichler', productName: 'Guacanale Soslu Tonbalıklı Kruvasan', description: 'Tereyağlı kruvasan arasında kremaması gucamole taze dilim avokado ve hafif mayonezli özel soslu ton balığı üzerinde mor soğan ve taze roka yaprakları ile servis edilir.', tooltip: 'En çok satan', price: 335, image: 'guacanale-soslu-tonbalıklı-kruvasan.jpg' },

    { productId: 22, categoryName: 'bowllar', productName: 'Green Detox Bowl', description: 'Muz , yeşil elma ıspanak ve Hindistan cevizi sütünün muhteşem uyumu ile hazırlanır. Üzerinde chia tohumu kabak çekirdeği ve granola ile servis edilir.', tooltip: 'En çok satan', price: 265, image: 'green-detox-bowl.jpg' },
    { productId: 23, categoryName: 'bowllar', productName: 'Peanut Banana Bowl', description: 'Badem sütü, fıstık ezmesi, muz ve kakao ile hazırlanan protein değeri yüksek bir öğündür. Üzerinde muz dilimleri, gronala ve fıstık kırıkları ile servis edilir.', tooltip: 'En çok satan', price: 275, image: 'peabut-banana-bowl.jpg' },
    { productId: 24, categoryName: 'bowllar', productName: 'Tropikal Energy Bowl', description: ' Özenle hazırlanan orman meyveli yoğurdun üzerinde ananas muz çilek ve file badem parçaları ile servis edilir.', tooltip: 'En çok satan', price: 275, image: 'tropikal-energy-bowl.jpg' },
    { productId: 25, categoryName: 'bowllar', productName: 'Berry Yoğurt Bowl', description: ' Yoğurt bal ve chia tohumu ile hazırlanır üzerinde yaban mersini ve çilek parçaları ile servis edilir.', tooltip: 'En çok satan', price: 275, image: 'berry-yogurt-bowl.jpg' },

    { productId: 26, categoryName: 'tostlar', productName: '4 Peynirli Tost', description: ' Tost ekmeği arasında rende kaşar peyniri, cheddar peyniri, beyaz peyniri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 265, image: '4-peynirli-tost.jpg' },
    { productId: 27, categoryName: 'tostlar', productName: 'Bazlama Tost', description: 'Bazlama ekmeği arasında özel sos, kaşar peyniri, sucuk, yumurta, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 290, image: 'bazlama-tost.jpg' },
    { productId: 28, categoryName: 'bazlamalar', productName: 'Tavuklu Bazlama', description: 'Bazlama ekmeği arasında domates soslu jülyen tavuk dilimleri, renkli biberler, mantar, bazlama ekmeği üzerinde beşamel sos ve rende kaşar peyniri, yanında patates cips, dip sos ve maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'tavuk-bazlama.jpg' },

    { productId: 29, categoryName: 'gözlemeler', productName: 'Alaturka Gözleme', description: 'Taze yufka arasında rende kaşar peyniri, sucuk ve renkli biberler, yanında söğüş(domates,salatalık,zeytin),  patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 290, image: 'alaturka-gözleme.jpg' },
    { productId: 30, categoryName: 'gözlemeler', productName: 'Bolu Usulü Gözleme', description: 'Taze yufka arasında rende kaşar peyniri, kıyma, köz patlıcan, yanında söğüş(domates,salatalık,zeytin) , patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 350, image: 'bolu-usülü-gözleme.jpg' },

    { productId: 31, categoryName: 'atıştırmalıklar', productName: 'Karışık Sepet', description: 'Sigara böreği, sosis, soğan halkası, çıtır tavuk, patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 295, image: 'karışık-sepet-atıştırmalık.jpg' },
    { productId: 32, categoryName: 'atıştırmalıklar', productName: 'Çıtır Tavuk', description: 'Kızarmış paneli çıtır tavuk parçaları, patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 230, image: 'çıtır-tavuk-atıştırmalık.jpg' },
    { productId: 33, categoryName: 'atıştırmalıklar', productName: 'Bonfrit', description: 'Kızarmış baharatlı parmak patatesler, dip sos ile servis edilir.', tooltip: 'En çok satan', price: 180, image: 'patates-atıştırmalık.jpg' },
    { productId: 34, categoryName: 'atıştırmalıklar', productName: 'Soğan Halkası', description: 'Panelenmiş çıtır soğan, patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 220, image: 'soğan-halkası-atıştırmalık.jpg' },

    { productId: 35, categoryName: 'meşrubatlar', productName: 'Kutu Cola', description: 'Buz gibi servis edilen ferahlatıcı kola.', tooltip: 'En çok satan', price: 80, image: 'içecekler-1.jpg' },
    { productId: 36, categoryName: 'meşrubatlar', productName: 'Fanta', description: 'Portakal aromalı, serinletici gazlı içecek.', tooltip: 'En çok satan', price: 60, image: 'içecekler-2.jpg' },
    { productId: 38, categoryName: 'meşrubatlar', productName: 'Fuse Tea Mango', description: 'Egzotik mango aromalı soğuk çay.', tooltip: 'En çok satan', price: 70, image: 'içecekler-4.jpg' },
    { productId: 39, categoryName:'meşrubatlar', productName: 'Fuse Tea Karpuz', description: 'Yaz ferahlığı sunan karpuz aromalı soğuk çay.', tooltip: 'En çok satan', price: 70, image: 'içecekler-5.jpg' },
    { productId: 41, categoryName: 'meşrubatlar', productName: 'Fuse Tea Şeftali', description: 'Doğal şeftali aromasıyla hafif ve ferah.', tooltip: 'En çok satan', price: 70, image: 'içecekler-6.jpg' },
    { productId: 42, categoryName: 'meşrubatlar', productName: 'Fuse Tea Limon', description: 'Limon aromalı, serinletici soğuk çay.', tooltip: 'En çok satan', price: 70, image: 'içecekler-7.jpg' },

    { productId: 43, categoryName: 'makarnalar', productName: 'Çıtır Mantı', description: 'Haşlanmış dana etli mantılar, derin yağda kızarmış şekilde sarımsaklı yoğurt ve tereyağlı özel sos ile servis edilir.', tooltip: 'En çok satan', price: 300, image: 'çıtır - mantı.jpg' },

    { productId: 44, categoryName: 'gözlemeler', productName: 'Peynirli Gözleme', description: 'Taze yufka arasında rende tulum peyniri, yanında söğüş(domates, salatalık, zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 225, image: 'nophoto.jpg' },
    { productId: 45, categoryName: 'gözlemeler', productName: 'Kaşarlı Gözleme', description: 'Taze yufka arasında rende kaşar peyniri yanında söğüş(domates, salatalık, zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 250, image: 'nophoto.jpg' },
    { productId: 46, categoryName: 'gözlemeler', productName: 'Mantarlı Kaşarlı Gözleme', description: 'Taze yufka arasında rende kaşar peyniri ve mantar dilimleri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 275, image: 'nophoto.jpg' },

    { productId: 47, categoryName: 'tostlar', productName: 'Sucuklu Tost', description: 'Tost ekmeği arasında sucuk dilimleri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 225, image: 'nophoto.jpg' },
    { productId: 48, categoryName: 'tostlar', productName: 'Sucuklu Kaşarlı Tost', description: 'Tost ekmeği arasında rende kaşar peyniri ve sucuk dilimleri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 250, image: 'nophoto.jpg' },
    { productId: 49, categoryName: 'tostlar', productName: 'Tulum Peynirli Tost', description: 'Tost ekmeği arasında rende tulum peyniri, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 265, image: 'nophoto.jpg' },
    { productId: 50, categoryName: 'tostlar', productName: 'Tulum Peynirli Sucuklu Tost', description: 'Tost ekmeği arasında rende tulum ve sucuk dilimleri, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 290, image: 'nophoto.jpg' },

    { productId: 51, categoryName: 'atıştırmalıklar', productName: 'Sigara Böreği', description: 'Kızarmış sigara börekleri, patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 220, image: 'nophoto.jpg' },

    { productId: 52, categoryName: 'salatalar', productName: 'Ton Balıklı Salata', description: 'Taze marul roka ve maydanoz yaprakları küp doğranmış domates ve salatalık dilimleri üzerinde ton balığı ile servis edilir.', tooltip: 'En çok satan', price: 290, image: 'nophoto.jpg' },


    { productId: 54, categoryName: 'kruvasan-sandwichler', productName: 'Hindi Fümeli Kruvasan Sandwich', description: 'Tereyağlı kruvasan arasında ince dilimlenmiş hindi füme cheddar peyniri, taze marul ve ballı hardal sos ile servis edilir.', tooltip: 'En çok satan', price: 295, image: 'nophoto.jpg' },
    { productId: 55, categoryName: 'kruvasan-sandwichler', productName: 'Çikolatalı Meyveli Kruvasan', description: 'Tereyağlı kruvasan arasında taze çilek ve muz dilimleri eşliğinde kakaolu fındık kreması, üzerinde Belçika çikolatası ile servis edilir.', tooltip: 'En çok satan', price: 360, image: 'nophoto.jpg' },

    { productId: 56, categoryName: 'ana-yemekler', productName: 'Cafe de Paris Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, cafe de paris sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'nophoto.jpg' },
    { productId: 57, categoryName: 'ana-yemekler', productName: 'Dağ Kekikli Kremalı Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel dağ kekikli kremalı sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'nophoto.jpg' },
    { productId: 58, categoryName: 'ana-yemekler', productName: 'Pesto Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel kremalı fesleğenli sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'nophoto.jpg' },
    { productId: 59, categoryName: 'ana-yemekler', productName: 'Sweetchili Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, mısır, özel sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'nophoto.jpg' },
    { productId: 60, categoryName: 'ana-yemekler', productName: 'Tavuk Çökertme', description: 'Yoğurt yatağında jülyen tavuk, renkli biberler, soğan, kibrit patates, özel tereyağlı kırmızı sos ile servis edilir.', tooltip: 'En çok satan', price: 420, image: 'nophoto.jpg' },

    { productId: 61, categoryName: 'makarnalar', productName: 'Körili Mantarlı Tavuklu Penne', description: 'Haşlanmış penne makarnası, jülyen tavuk dilimleri, jülyen mantar, körili kremalı özel sos ile servis edilir.', tooltip: 'En çok satan', price: 310, image: 'nophoto.jpg' },
    { productId: 62, categoryName: 'makarnalar', productName: 'Ev Mantısı', description: 'Haşlanmış dana etli mantılar, sarımsaklı yoğurt ve tereyağlı özel sos ile servis edilir.', tooltip: 'En çok satan', price: 320, image: 'nophoto.jpg' },
    { productId: 63, categoryName: 'makarnalar', productName: 'Anne Makarna', description: 'Haşlanmış penne makarnası domates rendesi ile servis edilir.', tooltip: 'En çok satan', price: 215, image: 'nophoto.jpg' },
    { productId: 64, categoryName: 'sıcak-kahveler', productName: 'Americano', description: 'Espresso bazlı, sade ve dengeli içimli sıcak kahve.', tooltip: 'Yeni', price: 150, image: 'nophoto.jpg' },
    { productId: 65, categoryName: 'sıcak-kahveler', productName: 'Butter Caramel', description: 'Tereyağlı karamel aromasıyla yumuşak ve tatlı içim.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 66, categoryName: 'sıcak-kahveler', productName: 'Cappuccino', description: 'Bol köpük ve yoğun espresso tadıyla klasik cappuccino.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 67, categoryName: 'sıcak-kahveler', productName: 'Caramel Latte', description: 'Karamel dokunuşlu latte; kremamsı ve tatlı içim.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 68, categoryName: 'sıcak-kahveler', productName: 'Caramel Macchiato', description: 'Espresso ve sütün karamel ile katmanlı, aromalı buluşması.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 69, categoryName: 'sıcak-kahveler', productName: 'Cookie Latte', description: 'Kurabiye aromasıyla tatlı, yumuşak içimli latte.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 70, categoryName: 'sıcak-kahveler', productName: 'Cortado', description: 'Espresso ve az sütle dengelenmiş, yoğun aromalı içim.', tooltip: 'Yeni', price: 160, image: 'nophoto.jpg' },
    { productId: 71, categoryName: 'sıcak-kahveler', productName: 'Espresso', description: 'Kısa, yoğun ve aroması yüksek klasik espresso.', tooltip: 'Yeni', price: 80, image: 'nophoto.jpg' },
    { productId: 72, categoryName: 'sıcak-kahveler', productName: 'Double Espresso', description: 'Daha yoğun kahve deneyimi için çift shot espresso.', tooltip: 'Yeni', price: 100, image: 'nophoto.jpg' },
    { productId: 73, categoryName: 'sıcak-kahveler', productName: 'Flat White', description: 'Kadifemsi süt dokusu ve yoğun espresso dengesi.', tooltip: 'Yeni', price: 170, image: 'nophoto.jpg' },
    { productId: 74, categoryName: 'sıcak-kahveler', productName: 'Hazelnut Latte', description: 'Fındık aromasıyla zenginleşen kremalı latte.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 75, categoryName: 'sıcak-kahveler', productName: 'Irish Latte', description: 'İrish aromasıyla sıcak, yumuşak içimli latte.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 76, categoryName: 'sıcak-kahveler', productName: 'Latte', description: 'Espresso ve sütün klasik uyumu; kremamsı içim.', tooltip: 'Yeni', price: 170, image: 'nophoto.jpg' },
    { productId: 77, categoryName: 'sıcak-kahveler', productName: 'Lotus Latte', description: 'Lotus aromasıyla tatlı ve yumuşak içimli latte.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 78, categoryName: 'sıcak-kahveler', productName: 'Mocha', description: 'Kahve ve çikolatanın sıcak, yoğun birleşimi.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 79, categoryName: 'sıcak-kahveler', productName: 'Salted Caramel', description: 'Tuzlu karamel aromasıyla dengeli tatlı bir latte.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 80, categoryName: 'sıcak-kahveler', productName: 'Vanilya Latte', description: 'Vanilya aromasıyla yumuşak ve tatlı içim.', tooltip: 'Yeni', price: 180, image: 'nophoto.jpg' },
    { productId: 81, categoryName: 'sıcak-kahveler', productName: 'White Mocha', description: 'Beyaz çikolata dokunuşlu, kremamsı mocha.', tooltip: 'Yeni', price: 185, image: 'nophoto.jpg' },
    { productId: 82, categoryName: 'sıcak-kahveler', productName: 'Almond Latte', description: 'Badem aromasıyla hafif ve tatlı latte deneyimi.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 83, categoryName: 'sıcak-kahveler', productName: 'Choco-Banana', description: 'Çikolata ve muz aromasıyla tatlı, sıcak içim.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 84, categoryName: 'sıcak-kahveler', productName: 'Cocoster Latte', description: 'Hindistan cevizi aromasıyla yumuşak içimli latte.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 85, categoryName: 'sıcak-kahveler', productName: 'Pumpkin Spice Latte', description: 'Baharatlı balkabağı aromasıyla sıcak ve karakterli içim.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },
    { productId: 86, categoryName: 'sıcak-kahveler', productName: 'Quattro Latte', description: 'Özel Quattro dokunuşuyla aromalı latte.', tooltip: 'Yeni', price: 200, image: 'nophoto.jpg' },

    { productId: 87, categoryName: 'tatlılar', productName: 'Belçika Çikolatalı Pasta', description: 'Yoğun Belçika çikolatası ile zengin, yumuşak pasta dilimi.', tooltip: 'Yeni', price: 260, image: 'nophoto.jpg' },
    { productId: 88, categoryName: 'tatlılar', productName: 'Bellavista', description: 'Kremamsı dokusu ve hafif tadıyla özel tatlı seçeneği.', tooltip: 'Yeni', price: 220, image: 'nophoto.jpg' },
    { productId: 89, categoryName: 'tatlılar', productName: 'Antep Cup', description: 'Antep fıstığı aromalı cup tatlı; pratik ve lezzetli.', tooltip: 'Yeni', price: 230, image: 'nophoto.jpg' },
    { productId: 90, categoryName: 'tatlılar', productName: 'Black Velvet Cup', description: 'Kakao aromalı, yumuşak dokulu velvet cup tatlı.', tooltip: 'Yeni', price: 220, image: 'nophoto.jpg' },
    { productId: 91, categoryName: 'tatlılar', productName: 'Devil Mono Pasta', description: 'Yoğun çikolata severlere özel, tek porsiyon mono pasta.', tooltip: 'Yeni', price: 280, image: 'nophoto.jpg' },
    { productId: 92, categoryName: 'tatlılar', productName: 'Frambuaz Cheesecake', description: 'Frambuaz aromasıyla ferah, kremalı cheesecake dilimi.', tooltip: 'Yeni', price: 240, image: 'nophoto.jpg' },
    { productId: 93, categoryName: 'tatlılar', productName: 'Limon Cheesecake', description: 'Limonun ferahlığıyla hafif ve kremalı cheesecake.', tooltip: 'Yeni', price: 240, image: 'nophoto.jpg' },
    { productId: 94, categoryName: 'tatlılar', productName: 'Lotus Cheesecake', description: 'Lotus aromasıyla zengin, yoğun lezzette cheesecake.', tooltip: 'Yeni', price: 240, image: 'nophoto.jpg' },
    { productId: 95, categoryName: 'tatlılar', productName: 'Magnolia Cup', description: 'Kremalı magnolia; bisküvi dokusuyla keyifli tatlı.', tooltip: 'Yeni', price: 220, image: 'nophoto.jpg' },
    { productId: 96, categoryName: 'tatlılar', productName: 'San Sebastian', description: 'Karamelize üst yüzeyiyle klasik San Sebastian cheesecake.', tooltip: 'Yeni', price: 240, image: 'nophoto.jpg' },
    { productId: 97, categoryName: 'tatlılar', productName: 'Yaban Mersinli Cheesecake', description: 'Yaban mersini aromasıyla meyveli, kremalı cheesecake.', tooltip: 'Yeni', price: 240, image: 'nophoto.jpg' },
    { productId: 98, categoryName: 'tatlılar', productName: 'Latte Pasta', description: 'Kahve aromalı, yumuşak ve dengeli pasta dilimi.', tooltip: 'Yeni', price: 260, image: 'nophoto.jpg' },
    { productId: 99, categoryName: 'tatlılar', productName: 'Antep San Sebastian', description: 'Antep fıstığı dokunuşlu San Sebastian; yoğun ve özel.', tooltip: 'Yeni', price: 290, image: 'nophoto.jpg' },
    { productId: 100, categoryName: 'tatlılar', productName: 'Antep Rüyası', description: 'Antep fıstığı ağırlıklı, zengin aromalı özel tatlı.', tooltip: 'Yeni', price: 280, image: 'nophoto.jpg' },

  ];

  getAll(): Product[] {  // tüm ürünleri döndürür
    return this.products;
  }



  getByCategory(categoryName: string): Product[] {
    return this.products.filter(p => p.categoryName === categoryName);
  }

}
