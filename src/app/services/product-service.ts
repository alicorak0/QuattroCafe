import { Injectable } from '@angular/core';
import { Product } from '../models/productModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private Products: Product[] = [
    { productId: 200, categoryName: 'sıcak-kahveler', productName: 'Americano', description: 'Espresso bazlı, sade ve dengeli içimli sıcak kahve.', tooltip: 'Yeni', price: 150, image: 'americano-sıcakkkahve.jpg' },
    { productId: 201, categoryName: 'sıcak-kahveler', productName: 'Butter Caramel', description: 'Tereyağlı karamel aromasıyla yumuşak ve tatlı içim.', tooltip: 'Yeni', price: 180, image: 'caramel-latte-sıcakkahve.jpg' },
    { productId: 202, categoryName: 'sıcak-kahveler', productName: 'Cappuccino', description: 'Bol köpük ve yoğun espresso tadıyla klasik cappuccino.', tooltip: 'Yeni', price: 200, image: 'cappucino-sıcakkkahve.jpg' },
    { productId: 203, categoryName: 'sıcak-kahveler', productName: 'Caramel Latte', description: 'Karamel dokunuşlu latte; kremamsı ve tatlı içim.', tooltip: 'Yeni', price: 180, image: 'caramel-latte-sıcakkahve.jpg' },
    { productId: 204, categoryName: 'sıcak-kahveler', productName: 'Caramel Macchiato', description: 'Espresso ve sütün karamel ile katmanlı, aromalı buluşması.', tooltip: 'Yeni', price: 180, image: 'caramel-latte-sıcakkahve.jpg' },
    { productId: 205, categoryName: 'sıcak-kahveler', productName: 'Cookie Latte', description: 'Kurabiye aromasıyla tatlı, yumuşak içimli latte.', tooltip: 'Yeni', price: 180, image: 'cookie-latte-sıcakkahve.jpg' },
    { productId: 206, categoryName: 'sıcak-kahveler', productName: 'Cortado', description: 'Espresso ve az sütle dengelenmiş, yoğun aromalı içim.', tooltip: 'Yeni', price: 150, image: 'cortado-sıcakkkahve.jpg' },
    { productId: 207, categoryName: 'sıcak-kahveler', productName: 'Espresso', description: 'Kısa, yoğun ve aroması yüksek klasik espresso.', tooltip: 'Yeni', price: 80, image: 'espresso-sıcakkahve.jpg' },
    { productId: 208, categoryName: 'sıcak-kahveler', productName: 'Espresso Double', description: 'Daha yoğun kahve deneyimi için çift shot espresso.', tooltip: 'Yeni', price: 100, image: 'espresso-sıcakkahve.jpg' },
    { productId: 209, categoryName: 'sıcak-kahveler', productName: 'Flatwhite', description: 'Kadifemsi süt dokusu ve yoğun espresso dengesi.', tooltip: 'Yeni', price: 170, image: 'flatwhite-sıcakkkahve.jpg' },
    { productId: 210, categoryName: 'sıcak-kahveler', productName: 'Hazelnut Latte', description: 'Fındık aromasıyla zenginleşen kremalı latte.', tooltip: 'Yeni', price: 180, image: 'hazelnut-latte-sıcakkahve.jpg' },
    { productId: 211, categoryName: 'sıcak-kahveler', productName: 'Irish Latte', description: 'İrish aromasıyla sıcak, yumuşak içimli latte.', tooltip: 'Yeni', price: 180, image: 'ırısh-latte-sıcakkahve.jpg' },
    { productId: 212, categoryName: 'sıcak-kahveler', productName: 'Latte', description: 'Espresso ve sütün klasik uyumu; kremamsı içim.', tooltip: 'Yeni', price: 170, image: 'latte-sıcakkahve.jpg' },
    { productId: 213, categoryName: 'sıcak-kahveler', productName: 'Lotus Latte', description: 'Lotus aromasıyla tatlı ve yumuşak içimli latte.', tooltip: 'Yeni', price: 180, image: 'lotus-latte-sıcakkkahve.jpg' },
    { productId: 214, categoryName: 'sıcak-kahveler', productName: 'Mocha', description: 'Kahve ve çikolatanın sıcak, yoğun birleşimi.', tooltip: 'Yeni', price: 180, image: 'mocha-sıcakkkahve.jpg' },
    { productId: 215, categoryName: 'sıcak-kahveler', productName: 'Salted Caramel', description: 'Tuzlu karamel aromasıyla dengeli tatlı bir latte.', tooltip: 'Yeni', price: 200, image: 'saltedcaramel-latte-sıcakkahve.jpg' },
    { productId: 216, categoryName: 'sıcak-kahveler', productName: 'Vanilya Latte', description: 'Vanilya aromasıyla yumuşak ve tatlı içim.', tooltip: 'Yeni', price: 180, image: 'vanilya-latte-sıcakkahve.jpg' },
    { productId: 217, categoryName: 'sıcak-kahveler', productName: 'White Mocha', description: 'Beyaz çikolata dokunuşlu, kremamsı mocha.', tooltip: 'Yeni', price: 180, image: 'white-mocha-sıcakkkahve.jpg' },

    { productId: 218, categoryName: 'special-sıcaklar', productName: 'Almond Latte', description: 'Badem aromasıyla hafif ve tatlı latte deneyimi.', tooltip: 'Yeni', price: 170, image: 'almond-latte-specialsıcak.jpg' },
    { productId: 219, categoryName: 'special-sıcaklar', productName: 'Choco-Banana Latte', description: 'Çikolata ve muz aromasıyla tatlı, sıcak içim.', tooltip: 'Yeni', price: 170, image: 'choco-banana-latte-specialsıcak.jpg' },
    { productId: 220, categoryName: 'special-sıcaklar', productName: 'Cocoster Latte', description: 'Hindistan cevizi aromasıyla yumuşak içimli latte.', tooltip: 'Yeni', price: 170, image: 'cocoster-latte-specialsıcak.jpg' },
    { productId: 221, categoryName: 'special-sıcaklar', productName: 'Lavender Rose Latte', description: 'Lavender Rose Latte aromatik yapısı ve dengeli lezzetiyle keyifli bir içim sunar.', tooltip: 'Yeni', price: 170, image: 'lavander-rose-latte-specialsıcak.jpg' },
    { productId: 222, categoryName: 'special-sıcaklar', productName: 'Pecan Caramel Latte', description: 'Pecan Caramel Latte aromatik yapısı ve dengeli lezzetiyle keyifli bir içim sunar.', tooltip: 'Yeni', price: 170, image: 'pecan-caramel-latte-specialsıcak.jpg' },
    { productId: 223, categoryName: 'special-sıcaklar', productName: 'Pumpkin Spice Latte', description: 'Baharatlı balkabağı aromasıyla sıcak ve karakterli içim.', tooltip: 'Yeni', price: 170, image: 'pumpkin-spice-latte-specialsıcak.jpg' },
    { productId: 240, categoryName: 'special-sıcaklar', productName: 'Quattro Latte', description: 'Quattro Latte aromatik yapısı ve dengeli lezzetiyle keyifli bir içim sunar.', tooltip: 'Yeni', price: 200, image: 'quattro-latte-specialsıcak.jpg' },



    { productId: 224, categoryName: 'soğuk-kahveler', productName: 'Cold Brew', description: 'Cold Brew ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'cold-brew-sogukkahve.jpg' },
    { productId: 225, categoryName: 'soğuk-kahveler', productName: 'Frappe', description: 'Frappe ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 220, image: 'frappe-sogukkahve.jpg' },
    { productId: 226, categoryName: 'soğuk-kahveler', productName: 'Ice Americano', description: 'Ice Americano ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 170, image: 'cold-brew-sogukkahve.jpg' },
    { productId: 227, categoryName: 'soğuk-kahveler', productName: 'Ice Butter Caramel Latte', description: 'Ice Butter Caramel Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-caramel-latte-sogukkahve.jpg' },
    { productId: 228, categoryName: 'soğuk-kahveler', productName: 'Ice Caramel Latte', description: 'Ice Caramel Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-caramel-latte-sogukkahve.jpg' },
    { productId: 229, categoryName: 'soğuk-kahveler', productName: 'Ice Caramel Macchiato', description: 'Ice Caramel Macchiato ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-caramel-latte-sogukkahve.jpg' },
    { productId: 230, categoryName: 'soğuk-kahveler', productName: 'Ice Cookie Latte', description: 'Ice Cookie Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-cookie-latte-sogukkahve.jpg' },
    { productId: 231, categoryName: 'soğuk-kahveler', productName: 'Ice Flat White', description: 'Ice Flat White ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 190, image: 'ice-flatwhite-sogukkahve.jpg' },
    { productId: 232, categoryName: 'soğuk-kahveler', productName: 'Ice Hazelnut Latte', description: 'Ice Hazelnut Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-hazelnut-latte-sogukkahve.jpg' },
    { productId: 233, categoryName: 'soğuk-kahveler', productName: 'Ice Irish Latte', description: 'Ice Irish Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-irish-latte-sogukkahve.jpg' },
    { productId: 234, categoryName: 'soğuk-kahveler', productName: 'Ice Latte', description: 'Ice Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'ice-vanilya-latte-sogukkahve.jpg' },
    { productId: 235, categoryName: 'soğuk-kahveler', productName: 'Ice Lotus Latte', description: 'Ice Lotus Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-lotus-latte-sogukkahve.jpg' },
    { productId: 236, categoryName: 'soğuk-kahveler', productName: 'Ice Mocha', description: 'Ice Mocha ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-mocha-sogukkahve.jpg' },
    { productId: 237, categoryName: 'soğuk-kahveler', productName: 'Ice Salted Caramel Latte', description: 'Ice Salted Caramel Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-salted-caramel-latte-sogukkahve.jpg' },
    { productId: 238, categoryName: 'soğuk-kahveler', productName: 'Ice Vanilya Latte', description: 'Ice Vanilya Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-vanilya-latte-sogukkahve.jpg' },
    { productId: 239, categoryName: 'soğuk-kahveler', productName: 'Ice White Mocha', description: 'Ice White Mocha ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'ice-white-mocha-sogukkahve.jpg' },
    { productId: 240, categoryName: 'soğuk-kahveler', productName: 'Quattro Affagato', description: 'Quattro Affagato ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 220, image: 'quattro-affagato-sogukkahve.jpg' },


    { productId: 241, categoryName: 'milkshakeler', productName: 'Çikolatalı Milkshake', description: 'Çikolatalı Milkshake yoğun kıvamı ve ferah tadıyla serinletici bir milkshake seçeneğidir.', tooltip: 'Yeni', price: 180, image: 'çikolatalı-milkshake.jpg' },
    { productId: 242, categoryName: 'milkshakeler', productName: 'Çilekli Milkshake', description: 'Çilekli Milkshake yoğun kıvamı ve ferah tadıyla serinletici bir milkshake seçeneğidir.', tooltip: 'Yeni', price: 180, image: 'çilekli-milkshake.jpg' },
    { productId: 243, categoryName: 'milkshakeler', productName: 'Karamel Milkshake', description: 'Karamel Milkshake yoğun kıvamı ve ferah tadıyla serinletici bir milkshake seçeneğidir.', tooltip: 'Yeni', price: 180, image: 'karamel-milkshake.jpg' },
    { productId: 244, categoryName: 'milkshakeler', productName: 'Karpuz Milkshake', description: 'Karpuz Milkshake yoğun kıvamı ve ferah tadıyla serinletici bir milkshake seçeneğidir.', tooltip: 'Yeni', price: 180, image: 'çilekli-milkshake.jpg' },

    { productId: 245, categoryName: 'meşrubatlar', productName: 'Ayran', description: '', tooltip: 'Yeni', price: 60, image: 'ayran-meşrubat.jpg' },
    { productId: 246, categoryName: 'meşrubatlar', productName: 'Cappy Şeftali', description: '', tooltip: 'Yeni', price: 80, image: 'cappy-şeftali-meşrubat.jpg' },
    { productId: 247, categoryName: 'meşrubatlar', productName: 'Cappy Vişne', description: '', tooltip: 'Yeni', price: 80, image: 'cappy-vişne-meşrubat.jpg' },
    { productId: 248, categoryName: 'meşrubatlar', productName: 'Coca Cola Kutu', description: 'Buz gibi servis edilen ferahlatıcı kola.', tooltip: 'Yeni', price: 80, image: 'içecekler-1.jpg' },
    { productId: 249, categoryName: 'meşrubatlar', productName: 'Coca Cola Şişe', description: '', tooltip: 'Yeni', price: 90, image: 'coca-cola-şişe-meşrubat.jpg' },
    { productId: 250, categoryName: 'meşrubatlar', productName: 'Coca Cola Zero Kutu', description: '', tooltip: 'Yeni', price: 80, image: 'coca-cola-zero-meşrubat.jpg' },
    { productId: 251, categoryName: 'meşrubatlar', productName: 'Elmalı Soda', description: '', tooltip: 'Yeni', price: 65, image: 'elmalı-soda-meşrubat.jpg' },
    { productId: 252, categoryName: 'meşrubatlar', productName: 'Fanta', description: 'Portakal aromalı, serinletici gazlı içecek.', tooltip: 'Yeni', price: 80, image: 'içecekler-2.jpg' },
    { productId: 253, categoryName: 'meşrubatlar', productName: 'Fuse Tea Karpuz', description: 'Yaz ferahlığı sunan karpuz aromalı soğuk çay.', tooltip: 'Yeni', price: 70, image: 'içecekler-5.jpg' },
    { productId: 254, categoryName: 'meşrubatlar', productName: 'Fuse Tea Mango ve Ananas Kutu', description: 'Egzotik mango aromalı soğuk çay.', tooltip: 'Yeni', price: 70, image: 'içecekler-4.jpg' },
    { productId: 255, categoryName: 'meşrubatlar', productName: 'Fuse Tea Şeftali', description: 'Doğal şeftali aromasıyla hafif ve ferah.', tooltip: 'Yeni', price: 70, image: 'içecekler-6.jpg' },
    { productId: 400, categoryName: 'meşrubatlar', productName: 'Fuse Tea Limon', description: '', tooltip: 'Yeni', price: 50, image: 'içecekler-7.jpg' },
    { productId: 256, categoryName: 'meşrubatlar', productName: 'Karpuz Çilek Soda', description: '', tooltip: 'Yeni', price: 65, image: 'karpuzlu-soda-meşrubat.jpg' },
    { productId: 257, categoryName: 'meşrubatlar', productName: 'Limonlu Soda', description: '', tooltip: 'Yeni', price: 65, image: 'limonlu-soda-meşrubat.jpg' },
    { productId: 258, categoryName: 'meşrubatlar', productName: 'Mango Ananas Soda', description: '', tooltip: 'Yeni', price: 65, image: 'mango-ananas-soda-meşrubat.jpg' },
    { productId: 259, categoryName: 'meşrubatlar', productName: 'Premium Sade Soda', description: '', tooltip: 'Yeni', price: 90, image: 'premium-soda-meşrubat.jpg' },
    { productId: 260, categoryName: 'meşrubatlar', productName: 'Redbull', description: '', tooltip: 'Yeni', price: 110, image: 'redbull-meşrubat.jpg' },
    { productId: 261, categoryName: 'meşrubatlar', productName: 'Sade Soda', description: '', tooltip: 'Yeni', price: 60, image: 'içecekler-8.jpg' },
    { productId: 262, categoryName: 'meşrubatlar', productName: 'Sprite Kutu', description: '', tooltip: 'Yeni', price: 80, image: 'sprite-meşrubat.jpg' },
    { productId: 263, categoryName: 'meşrubatlar', productName: 'Uludağ Premium Su', description: '', tooltip: 'Yeni', price: 50, image: 'uludağ-premium-su-meşrubat.jpg' },




    { productId: 264, categoryName: 'soğuk-içecekler', productName: 'Berry Hibiscus', description: 'Berry Hibiscus ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'berry-hibiscus-sogukicecek.jpg' },
    { productId: 265, categoryName: 'soğuk-içecekler', productName: 'Blue Ocean', description: 'Blue Ocean ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'blue-ocean-sogukicecek.jpg' },
    { productId: 268, categoryName: 'soğuk-içecekler', productName: 'Churchill', description: 'Churchill ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 120, image: 'churcill-sogukicecek.jpg' },
    { productId: 269, categoryName: 'soğuk-içecekler', productName: 'Cool Lime', description: 'Cool Lime ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'cool-lime-sogukicecek.jpg' },
    { productId: 270, categoryName: 'soğuk-içecekler', productName: 'Filtre Kahve', description: 'Filtre Kahve ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 150, image: 'filtre-kahve-sogukicecek.jpg' },
    { productId: 271, categoryName: 'soğuk-içecekler', productName: 'Frozen Ananas', description: 'Frozen Ananas ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'frozen-ananas-sogukicecek.jpg' },
    { productId: 272, categoryName: 'soğuk-içecekler', productName: 'Frozen Çilek', description: 'Frozen Çilek ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'frozen-çilek-sogukicecek.jpg' },
    { productId: 274, categoryName: 'soğuk-içecekler', productName: 'Frozen Mango', description: 'Frozen Mango ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'frozen-mango-sogukicecek.jpg' },
    { productId: 275, categoryName: 'soğuk-içecekler', productName: 'Frozen Yaban Mersini', description: 'Frozen Yaban Mersini ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'frozen-yaban-mersini-sogukicecek.jpg' },
    { productId: 276, categoryName: 'soğuk-içecekler', productName: 'Gökkuşağı Limonata', description: 'Gökkuşağı Limonata ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 200, image: 'gökkusagı-limonata-sogukicecek.jpg' },
    { productId: 277, categoryName: 'soğuk-içecekler', productName: 'Ice Chai Tea Latte', description: 'Ice Chai Tea Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'ice-chai-tea-latte-sogukicecek.jpg' },
    { productId: 278, categoryName: 'soğuk-içecekler', productName: 'Ice Coco Choco', description: 'Ice Coco Choco ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'ice-coco-choco-sogukicecek.jpg' },
    { productId: 279, categoryName: 'soğuk-içecekler', productName: 'Ice Oreo Latte', description: 'Ice Oreo Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'ice-oreo-latte-sogukicecek.jpg' },
    { productId: 280, categoryName: 'soğuk-içecekler', productName: 'Ice Ruby Choco', description: 'Ice Ruby Choco ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'ice-ruby-choco-sogukicecek.jpg' },
    { productId: 281, categoryName: 'soğuk-içecekler', productName: 'Ice Sütlü Filtre Kahve', description: 'Ice Sütlü Filtre Kahve ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 160, image: 'ice-sütlü-filtre-kahve-sogukicecek.jpg' },
    { productId: 282, categoryName: 'soğuk-içecekler', productName: 'Limonata', description: 'Limonata ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'limonata-sogukicecek.jpg' },
    { productId: 284, categoryName: 'soğuk-içecekler', productName: 'Meksikan Lime', description: 'Meksikan Lime ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'mexican-lime-sogukicecek.jpg' },
    { productId: 285, categoryName: 'soğuk-içecekler', productName: 'Passion Lime', description: 'Passion Lime ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'passion-lime-sogukicecek.jpg' },
    { productId: 286, categoryName: 'soğuk-içecekler', productName: 'Portakal Suyu', description: 'Portakal Suyu ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 180, image: 'portakal-suyu-sogukicecek.jpg' },
    { productId: 289, categoryName: 'soğuk-içecekler', productName: 'Redbul Special', description: 'Redbul Special ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 150, image: 'redbull-special-sogukicecek.jpg' },


    { productId: 290, categoryName: 'tatlılar', productName: 'Red Velvet Cup', description: 'Red Velvet Cup yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 220, image: 'red-velvet-cup-tatlı.jpg' },
    { productId: 290, categoryName: 'tatlılar', productName: 'Antep Fıstıklı Velvet Cup', description: 'Antep Fıstıklı Velvet Cup yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 230, image: 'antep-fıstıklı-cup-tatlı.jpg' },
    { productId: 291, categoryName: 'tatlılar', productName: 'Antep Rüyası', description: 'Antep fıstığı ağırlıklı, zengin aromalı özel tatlı.', tooltip: 'Yeni', price: 280, image: 'antep-rüyası-tatlı.jpg' },
    { productId: 292, categoryName: 'tatlılar', productName: 'Antep San Sebastian', description: 'Antep fıstığı dokunuşlu San Sebastian; yoğun ve özel.', tooltip: 'Yeni', price: 290, image: 'antep-fıstıklı-sansebastian-tatlı.jpg' },
    { productId: 293, categoryName: 'tatlılar', productName: 'Belçika Çikolatalı Pasta', description: 'Yoğun Belçika çikolatası ile zengin, yumuşak pasta dilimi.', tooltip: 'Yeni', price: 260, image: 'belçika-çikolatalı-tatlı.jpg' },
    { productId: 294, categoryName: 'tatlılar', productName: 'Bellavista', description: 'Kremamsı dokusu ve hafif tadıyla özel tatlı seçeneği.', tooltip: 'Yeni', price: 220, image: 'bellvista-tatlı.jpg' },
    { productId: 295, categoryName: 'tatlılar', productName: 'Red Velvet Pasta', description: 'Red Velvet Pasta yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 240, image: 'red-velvet-pasta-tatlı.jpg' },
    { productId: 400, categoryName: 'tatlılar', productName: 'Havuçlu Tarçınlı Pasta', description: 'Havuçlu Tarçınlı Pasta yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 240, image: 'havuçlu-tarçınlı-pasta-tatlı.jpg' },



    { productId: 295, categoryName: 'tatlılar', productName: 'Devil Mono Pasta', description: 'Yoğun çikolata severlere özel, tek porsiyon mono pasta.', tooltip: 'Yeni', price: 280, image: 'devilmono-tatlı.jpg' },
    { productId: 296, categoryName: 'tatlılar', productName: 'Extra Callebaut', description: 'Extra Callebaut yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 80, image: 'extra-callebaut-tatlı.jpg' },
    { productId: 297, categoryName: 'tatlılar', productName: 'Frambuaz Cheesecake', description: 'Frambuaz aromasıyla ferah, kremalı cheesecake dilimi.', tooltip: 'Yeni', price: 240, image: 'frambuaz-cheesecake-tatlı.jpg' },
    { productId: 298, categoryName: 'tatlılar', productName: 'Latte Pasta', description: 'Kahve aromalı, yumuşak ve dengeli pasta dilimi.', tooltip: 'Yeni', price: 260, image: 'latte-pasta-tatlı.jpg' },
    { productId: 299, categoryName: 'tatlılar', productName: 'Limon Cheesecake', description: 'Limonun ferahlığıyla hafif ve kremalı cheesecake.', tooltip: 'Yeni', price: 240, image: 'limon-cheesecake-tatlı.jpg' },
    { productId: 300, categoryName: 'tatlılar', productName: 'Lotus Cheesake', description: 'Lotus Cheesake yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 240, image: 'lotus-cheesecake-tatlı.jpg' },
    { productId: 301, categoryName: 'tatlılar', productName: 'Lotus Cheesecake Mono', description: 'Lotus Cheesecake Mono yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 240, image: 'lotus-cheesecake-mono-tatlı.jpg' },
    { productId: 302, categoryName: 'tatlılar', productName: 'Çilekli Magnolia', description: 'Çilekli Magnolia yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 270, image: 'çilekli-magnolia-tatlı.jpg' },
    { productId: 303, categoryName: 'tatlılar', productName: 'Oreo Cheesecake', description: 'Oreo Cheesecake yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 240, image: 'oreo-cheesecake-tatlı.jpg' },
    { productId: 304, categoryName: 'tatlılar', productName: 'San Sebastian', description: 'Karamelize üst yüzeyiyle klasik San Sebastian cheesecake.', tooltip: 'Yeni', price: 240, image: 'san-sebastian-cheesecake-tatlı.jpg' },
    { productId: 306, categoryName: 'tatlılar', productName: 'Yaban Mersini Cheesecake', description: 'Yaban Mersini Cheesecake yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 240, image: 'yaban-mersini-cheesecake-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Yer Fıstıklı Mono', description: 'Yer Fıstıklı Mono yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 280, image: 'yerfstıklı-cheesecake-mono-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Malaga', description: 'Malaga yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 300, image: 'malaga-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Ekler Porsiyon', description: 'Ekler Porsiyon yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 150, image: 'ekler-porsiyon-tatlı.jpg' },

    { productId: 307, categoryName: 'tatlılar', productName: 'Spangle', description: 'Spangle yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 250, image: 'spangle-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Profiterol', description: 'Profiterol yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 250, image: 'profiterol-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'İzmir Bomba', description: 'İzmir Bomba yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 80, image: 'izmir-bomba-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Ceviz Tarçın Çikolatalı Newyork Kurabiye', description: 'Ceviz Tarçın Çikolatalı Newyork Kurabiye yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 120, image: 'ceviz-tarçın-newyork-kurabiye-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: '4-6 Kişilik Pasta', description: '4-6 Kişilik Pasta yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 700, image: '4-6-kisilik-pasta-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Bademki Kavala Kurabiye Porsiyon', description: 'Bademki Kavala Kurabiye Porsiyon yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 150, image: 'bademki-kavala-kurabiye-porsiyon-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Frambuazlı Fındıklı Mini Tart Porsiyon', description: 'Frambuazlı Fındıklı Mini Tart Porsiyon yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 180, image: 'frambuazlı-fındıklı-mini-tart-porsiyon-tatlı.jpg' },
    { productId: 307, categoryName: 'tatlılar', productName: 'Tadelle Kurabiye Porsiyon ', description: 'Tadelle Kurabiye Porsiyon yumuşak dokusu ve dengeli tatlılığıyla çay ve kahveye eşlik eder.', tooltip: 'Yeni', price: 150, image: 'tadelle-kurabiye-porsiyon-tatlı.jpg' },







    { productId: 310, categoryName: 'kruvasan-sandwichler', productName: 'Çikolatalı Meyveli Kruvasan', description: 'Tereyağlı kruvasan arasında taze çilek ve muz dilimleri eşliğinde lezzetli bir kakaolu fındık kreması üzerinde ise nefis Belçika çikolatası.', tooltip: 'Yeni', price: 360, image: 'çikolatalı-meyveli-kruvasan.jpg' },
    { productId: 311, categoryName: 'kruvasan-sandwichler', productName: 'Guacamole Soslu Ton Balıklı Kruvasan', description: 'Tereyağlı kruvasan arasında kremaması gucamole taze dilim avokado ve hafif mayonezli özel soslu ton balığı üzerinde mor soğan ve taze roka yaprakları ile servis edilir.', tooltip: 'Yeni', price: 335, image: 'guacanale-soslu-tonbalıklı-kruvasan.jpg' },
    { productId: 312, categoryName: 'kruvasan-sandwichler', productName: 'Hindi Fümeli Kruvasan', description: 'Tereyağlı kruvasan arasında ince dilimlenmiş hindi füme cheddar peyniri, taze marul, ve ballı hardal sos ile servis edilir.', tooltip: 'Yeni', price: 295, image: 'hindü-fümeli-kruvasan.jpg' },
    { productId: 315, categoryName: 'kruvasan-sandwichler', productName: 'Peynirli Kruvasan', description: 'Tereyağlı kruvasan arasında kremamsı labne, kaşar peyniri, tulum peyniri ve beyaz peynirin üzerinde domates ve roka yaprakları ile servis edilir.', tooltip: 'Yeni', price: 265, image: 'peynirli-kruvasan.jpg' },
    { productId: 317, categoryName: 'kruvasan-sandwichler', productName: 'Tereyağlı Sade Kruvasan', description: 'Tereyağlı kruvasan arasında ince dilimlenmiş hindi füme cheddar peyniri, taze marul, ve ballı hardal sos ile servis edilir.', tooltip: 'Yeni', price: 150, image: 'tereyaglı-sade-kruvasan.jpg' },

    { productId: 318, categoryName: 'gözlemeler', productName: 'Alaturka Gözleme', description: 'Taze yufka arasında rende kaşar peyniri, sucuk ve renkli biberler, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 290, image: 'alaturka-gözleme.jpg' },
    { productId: 320, categoryName: 'gözlemeler', productName: 'Kaşarlı Gözleme', description: 'Taze yufka arasında rende kaşar peyniri yanında söğüş(domates, salatalık, zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 250, image: 'kaşarlı-gözleme.jpg' },
    { productId: 321, categoryName: 'gözlemeler', productName: 'Mantarlı Kaşarlı Gözleme', description: 'Taze yufka arasında rende kaşar peyniri ve mantar dilimleri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 275, image: 'mantarlı-kaşarlı-gözleme.jpg' },
    { productId: 322, categoryName: 'gözlemeler', productName: 'Patatesli Gözleme', description: 'Taze yufka ile hazırlanan patatesli gözleme, yanında söğüş, patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 225, image: 'patatesli-gözleme.jpg' },
    { productId: 323, categoryName: 'gözlemeler', productName: 'Peynirli Gözleme', description: 'Taze yufka arasında rende tulum peyniri, yanında söğüş(domates, salatalık, zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 250, image: 'peynirli-gözleme.jpg' },
    { productId: 319, categoryName: 'gözlemeler', productName: 'Patatesli Kaşarlı Gözleme', description: 'Taze yufka arasında patates ve rende kaşar peyniri, yanında söğüş, patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 275, image: 'patatesli-kaşarlı-gözleme.jpg' },

    { productId: 324, categoryName: 'ana-yemekler', productName: 'BBQ Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel barbekü sos, yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'barbekü-soslu-tavuk-anayemek.jpg' },
    { productId: 326, categoryName: 'ana-yemekler', productName: 'Cafe de Paris Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, cafe de paris sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 380, image: 'cafedeparis-soslu-tavuk-anayemek.jpg' },
    { productId: 328, categoryName: 'ana-yemekler', productName: 'Izgara Tavuk Pirzola', description: 'Marine edilmiş 1uk eti yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 410, image: 'barbekü-soslu-tavuk-anayemek.jpg' },
    { productId: 329, categoryName: 'ana-yemekler', productName: 'Karışık Izgara', description: 'Marine edilmiş ızgara tavuk eti, ev yapımı kasap köfte, sucuk dilimleri yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 600, image: 'karışık-ızgara-anayemek.jpg' },
    { productId: 330, categoryName: 'ana-yemekler', productName: 'Kekikli Kremalı Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel dağ kekikli kremalı sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 380, image: 'kekikli-kremalı-tavuk-anayemek.jpg' },
    { productId: 331, categoryName: 'ana-yemekler', productName: 'Köri Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel körili kremalı sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 380, image: 'köri-soslu-tavuk-anayemek.jpg' },
    { productId: 332, categoryName: 'ana-yemekler', productName: 'Pesto Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, jülyen mantar, özel kremalı fesleğenli sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'pesto-soslu-tavuk-anayemek.jpg' },
    { productId: 333, categoryName: 'ana-yemekler', productName: 'Sweetchili Soslu Tavuk', description: 'Jülyen tavuk dilimleri, renkli biberler, mısır, özel sos yanında patates püresi, maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'sweetchili-soslu-tavuk-anayemek.jpg' },


    { productId: 335, categoryName: 'makarnalar', productName: 'Anne Makarna', description: 'Haşlanmış penne makarnası domates rendesi ile servis edilir.', tooltip: 'Yeni', price: 215, image: 'anne-makarnası.jpg' },
    { productId: 336, categoryName: 'makarnalar', productName: 'Çıtır Mantı', description: 'Haşlanmış dana etli mantılar, derin yağda kızarmış şekilde sarımsaklı yoğurt ve tereyağlı özel sos ile servis edilir.', tooltip: 'Yeni', price: 250, image: 'çıtır-mantı.jpg' },
    { productId: 337, categoryName: 'makarnalar', productName: 'Ev Mantısı', description: 'Haşlanmış dana etli mantılar, sarımsaklı yoğurt ve tereyağlı özel sos ile servis edilir.', tooltip: 'Yeni', price: 300, image: 'ev-mantısı.jpg' },
    { productId: 338, categoryName: 'makarnalar', productName: 'Körili Tavuklu Mantarlı Makarna', description: 'Haşlanmış penne makarnası, jülyen tavuk dilimleri, jülyen mantar, körili kremalı özel sos ile servis edilir.', tooltip: 'Yeni', price: 330, image: 'pesto-soslu-mantarlı-tavuklu-penne-makarna.jpg' },
    { productId: 339, categoryName: 'makarnalar', productName: 'Kremalı Mantarlı Tavuklu Makarna', description: 'Haşlanmış penne makarnası, jülyen tavuk dilimleri, jülyen mantar, kremalı özel sos ile servis edilir.', tooltip: 'Yeni', price: 330, image: 'kremalı-tavuklu-penne-makarna.jpg' },
    { productId: 340, categoryName: 'makarnalar', productName: 'Penne Arabiata', description: 'Haşlanmış penne makarnası, zeytin dilimleri, mısır, jalapeño biber, özel arabiata sos ile servis edilir.', tooltip: 'Yeni', price: 285, image: 'penne-arabiata-makarna.jpg' },
    { productId: 341, categoryName: 'makarnalar', productName: 'Pesto Soslu Kremalı Tavuklu Makarna', description: 'Haşlanmış penne makarnası, jülyen tavuk dilimleri, jülyen mantar, pesto kremalı özel sos ile servis edilir', tooltip: 'Yeni', price: 340, image: 'pesto-soslu-mantarlı-tavuklu-penne-makarna.jpg' },
    { productId: 342, categoryName: 'makarnalar', productName: 'Tagliatelle Alfredo', description: 'Haşlanmış tagliatelle makarnası, jülyen mantar, kremalı özel sos, üzerinde ızgara tavuk ile servis edilir', tooltip: 'Yeni', price: 350, image: 'tagliatalle-alfredo-makarna.jpg' },

    { productId: 343, categoryName: 'salatalar', productName: 'Çıtır Tavuklu Salata', description: 'Taze marul roka ve maydanoz yaprakları küp doğranmış domates ve salatalık dilimleri üzerinde panelenmiş çıtır tavuk parçaları ile servis edilir.', tooltip: 'En çok satan', price: 330, image: 'çıtır-tavuklu-salata.jpg' },
    { productId: 344, categoryName: 'salatalar', productName: 'Peynirli Avokado Salatası', description: 'küp doğranmış avokado beyaz peynir domates salatalık ve mor soğanın muazzam birleşimi nar ekşisi ve zeytinyağı ile servis edilir.', tooltip: 'Yeni', price: 310, image: 'peynirli-avakado-salatası.jpg' },
    { productId: 310, categoryName: 'salatalar', productName: 'Sezar Salata', description: 'Çıtır göbek marullar, kroton ekmek, özel sezar sos, ızgara tavuk dilimleri, çeri domatesler ile servis edilir.', tooltip: 'Yeni', price: 340, image: 'sezar-salata.jpg' },
    { productId: 346, categoryName: 'salatalar', productName: 'Ton Balıklı Salata', description: 'Taze marul roka ve maydanoz yaprakları küp doğranmış domates ve salatalık dilimleri üzerinde ton balığı ile servis edilir.', tooltip: 'Yeni', price: 320, image: 'ton-balıklı-salata.jpg' },

    { productId: 347, categoryName: 'wrapler', productName: 'Çıtır Tavuk Wrap', description: 'Tortilla lavaş arasında çıtır tavuk dilimleri, marul, domates, kornişon turşu, cheddar peyniri yanında patates cips, maskolin salata ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 320, image: 'çıtır-tavuk-wrap.jpg' },
    { productId: 348, categoryName: 'wrapler', productName: 'Et Wrap', description: 'Et Wrap, özenle hazırlanan malzemeleriyle doyurucu ve lezzetli bir seçenektir.', tooltip: 'Yeni', price: 350, image: 'et-wrap.jpg' },
    { productId: 349, categoryName: 'wrapler', productName: 'Tavuklu Wrap', description: 'Tortilla lavaş arasında jülyen tavuk dilimleri, renkli biberler, mantar, rende kaşar peyniri, yanında patates cips, maskolin salata ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 340, image: 'tavuk-wrap.jpg' },

    { productId: 350, categoryName: 'tostlar', productName: '4 Peynirli Tost', description: 'Tost ekmeği arasında rende kaşar peyniri, cheddar peyniri, beyaz peyniri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 265, image: '4-peynirli-tost.jpg' },
    { productId: 351, categoryName: 'tostlar', productName: 'Bazlama Tost', description: 'Bazlama ekmeği arasında özel sos, kaşar peyniri, sucuk, yumurta, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 290, image: 'bazlama-tost.jpg' },
    { productId: 352, categoryName: 'tostlar', productName: 'Kaşarlı Tost', description: 'Kaşarlı Tost, özenle hazırlanan malzemeleriyle doyurucu ve lezzetli bir seçenektir.', tooltip: 'Yeni', price: 225, image: 'kaşarlı-tost.jpg' },
    { productId: 353, categoryName: 'tostlar', productName: 'Sucuklu Kaşarlı Tost', description: 'Tost ekmeği arasında rende kaşar peyniri ve sucuk dilimleri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 250, image: 'sucuklu-kaşarlı-tost.jpg' },
    { productId: 354, categoryName: 'tostlar', productName: 'Sucuklu Tost', description: 'Tost ekmeği arasında sucuk dilimleri yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 225, image: 'sucuklu-tost.jpg' },
    { productId: 355, categoryName: 'tostlar', productName: 'Tulum Peynirli Sucuklu Tost', description: 'Tost ekmeği arasında rende tulum ve sucuk dilimleri, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 290, image: 'sucuklu-tulum-peynirli-tost.jpg' },
    { productId: 356, categoryName: 'tostlar', productName: 'Tulum Peynirli Tost', description: 'Tost ekmeği arasında rende tulum peyniri, yanında söğüş(domates,salatalık,zeytin), patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 265, image: 'tulum-peynirli-tost.jpg' },

    { productId: 358, categoryName: 'bazlamalar', productName: 'Tavuk Bazlama', description: 'Bazlama ekmeği arasında domates soslu jülyen tavuk dilimleri, renkli biberler, mantar, bazlama ekmeği üzerinde  rende kaşar peyniri, yanında patates cips, dip sos ve maskolin salata ile servis edilir.', tooltip: 'En çok satan', price: 390, image: 'tavuk-bazlama.jpg' },

    { productId: 359, categoryName: 'meyve-tabagi', productName: 'Karışık Çerez', description: 'Karışık Çerez, taze ve özenle hazırlanan hafif bir paylaşım seçeneğidir.', tooltip: 'Yeni', price: 150, image: 'karışık-çerez-meyve-tabagi.jpg' },
    { productId: 360, categoryName: 'meyve-tabagi', productName: 'Meyve Tabağı', description: 'Meyve Tabağı, taze ve özenle hazırlanan hafif bir paylaşım seçeneğidir.', tooltip: 'Yeni', price: 280, image: 'meyve-tabağı.jpg' },


    { productId: 154, categoryName: 'kahvaltı', productName: 'Express Kahvaltı (Küçük)', description: 'Hafif express kahvaltı tabağı.', tooltip: 'Yeni', price: 250, image: 'express-kahvaltı-küçük.jpg' },
    { productId: 155, categoryName: 'kahvaltı', productName: 'Menemen', description: 'Domates, biber ve yumurta ile hazırlanan klasik menemen.', tooltip: 'Yeni', price: 210, image: 'menemen-kahvaltı.jpg' },
    { productId: 156, categoryName: 'kahvaltı', productName: 'Sahanda Sucuk', description: 'Sahanda pişirilmiş sucuk porsiyonu.', tooltip: 'Yeni', price: 200, image: 'sahanda-sucuk-kahvaltı.jpg' },
    { productId: 157, categoryName: 'kahvaltı', productName: 'Sahanda Yumurta', description: 'Sahanda pişirilmiş yumurta porsiyonu.', tooltip: 'Yeni', price: 150, image: 'sahanda-yumurta-kahvaltı.jpg' },
    { productId: 158, categoryName: 'kahvaltı', productName: 'Sucuklu Kaşarlı Menemen', description: 'Sucuk ve kaşar ile zenginleştirilmiş menemen.', tooltip: 'Yeni', price: 250, image: 'sucuklu-kaşarlı-menemen-kahvaltı.jpg' },
    { productId: 159, categoryName: 'kahvaltı', productName: 'Sucuklu Yumurta', description: 'Sucuk eşliğinde sahanda yumurta.', tooltip: 'Yeni', price: 240, image: 'sucuklu-yumurta-kahvaltı.jpg' },
    { productId: 153, categoryName: 'kahvaltı', productName: 'Serpme Kahvaltı (Kişi Başı)', description: 'Zengin kahvaltılık çeşitleriyle kişi başı servis edilen doyurucu serpme kahvaltı.', tooltip: 'Yeni', price: 600, image: 'serpme-kahvaltı.jpg' },

    { productId: 160, categoryName: 'ekstralar', productName: 'Ekstra Krema', description: 'İçeceklerinize ekstra krema ekleyin.', tooltip: 'Yeni', price: 25, image: 'krema-ekstralar.jpg' },
    { productId: 161, categoryName: 'ekstralar', productName: 'Ekstra Shot', description: 'Kahvenize ekstra espresso shot ekleyin.', tooltip: 'Yeni', price: 30, image: 'espresso-ekstralar.jpg' },
    { productId: 162, categoryName: 'ekstralar', productName: 'Ekstra Süt', description: 'İçeceklerinize ekstra süt ekleyin.', tooltip: 'Yeni', price: 25, image: 'süt-ekstralar.jpg' },
    { productId: 163, categoryName: 'ekstralar', productName: 'Ekstra Şurup', description: 'Aromalı şurup ilavesi.', tooltip: 'Yeni', price: 30, image: 'şurup-ekstralar.jpg' },
    { productId: 164, categoryName: 'ekstralar', productName: 'Küçük Sakız', description: 'Tekli küçük sakız.', tooltip: 'Yeni', price: 30, image: 'sakız-ekstralar.jpg' },
    { productId: 165, categoryName: 'ekstralar', productName: 'Lolipop', description: 'Tekli lolipop.', tooltip: 'Yeni', price: 30, image: 'lolipop-ekstralar.jpg' },
    { productId: 166, categoryName: 'ekstralar', productName: 'Mentos', description: 'Mentos şekerleme.', tooltip: 'Yeni', price: 50, image: 'mentos-ekstralar.jpg' },
    { productId: 168, categoryName: 'ekstralar', productName: 'Vividend Sakız', description: 'Vividend sakız.', tooltip: 'Yeni', price: 80, image: 'vivident-ekstralar.jpg' },
    { productId: 168, categoryName: 'ekstralar', productName: 'Taşıma Çantası', description: 'Take away kahveler için taşıma çantası.', tooltip: 'Yeni', price: 10, image: 'nophoto.jpg' },
    { productId: 168, categoryName: 'ekstralar', productName: 'Laktozsuz Süt', description: 'Laktozsuz Süt, siparişlerinizi kişiselleştirmeniz için ideal bir ekstra üründür.', tooltip: 'Yeni', price: 25, image: 'laktozsuz-süt-ekstralar.jpg' },



      { productId: 169, categoryName: 'dondurmalar', productName: '3 Top Dondurma', description: '3 top dondurma seçeneği.', tooltip: 'Yeni', price: 60, image: 'üçlü-dondurma.jpg' },
      { productId: 170, categoryName: 'dondurmalar', productName: 'Bal Badem Top', description: 'Bal badem aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'bal-badem-dondurma.jpg' },
      { productId: 171, categoryName: 'dondurmalar', productName: 'Blue Sky Top', description: 'Blue sky aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'blue-sky-dondurma.jpg' },
      { productId: 172, categoryName: 'dondurmalar', productName: 'Bubble Gum Top', description: 'Bubble gum aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'bubble-gum-dondurma.jpg' },
      { productId: 173, categoryName: 'dondurmalar', productName: 'Çikolata Kaymak Top', description: 'Çikolata-kaymak aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'çikolata-kaymaklı-dondurma.jpg' },
      { productId: 174, categoryName: 'dondurmalar', productName: 'Çilek Top', description: 'Çilek aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'çilekli-dondurma.jpg' },
      { productId: 175, categoryName: 'dondurmalar', productName: 'Karadut Top', description: 'Karadut aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'karadut-dondurma.jpg' },
      { productId: 176, categoryName: 'dondurmalar', productName: 'Karamel Top', description: 'Karamel aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'karamel-dondurma.jpg' },
      { productId: 177, categoryName: 'dondurmalar', productName: 'Kavun Top', description: 'Kavun aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'kavun-dondurma.jpg' },
      { productId: 178, categoryName: 'dondurmalar', productName: 'Limon Top', description: 'Limon aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'limonlu-dondurma.jpg' },
      { productId: 179, categoryName: 'dondurmalar', productName: 'Oreo Top', description: 'Oreo aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'oreo-dondurma.jpg' },
      { productId: 180, categoryName: 'dondurmalar', productName: 'Vanilya Top', description: 'Vanilya aromalı 1 top.', tooltip: 'Yeni', price: 60, image: 'vanilya-dondurma.jpg' },

    { productId: 215, categoryName: 'çaylar', productName: 'Siyah Çay', description: 'Sıcak çay.', tooltip: 'Yeni', price: 50, image: 'siyahçay-çay.jpg' },
    { productId: 215, categoryName: 'çaylar', productName: 'Fincan Siyah Çay', description: 'Fincanda Sıcak çay.', tooltip: 'Yeni', price: 90, image: 'fincan-siyahçay-çay.jpg' },
    { productId: 215, categoryName: 'çaylar', productName: 'Kupa Siyah Çay ', description: 'Kupada Sıcak çay.', tooltip: 'Yeni', price: 120, image: 'kupa-siyahçay-çay.jpg' },

    { productId: 181, categoryName: 'çaylar', productName: 'Ada Çayı', description: 'Sıcak ada çayı.', tooltip: 'Yeni', price: 130, image: 'adaçayı-çay.jpg' },
    { productId: 182, categoryName: 'çaylar', productName: 'Böğürtlen Çayı', description: 'Sıcak böğürlen çayı.', tooltip: 'Yeni', price: 130, image: 'böğürtlençayı-çay.jpg' },
    { productId: 183, categoryName: 'çaylar', productName: 'Hibiscus Çayı', description: 'Sıcak hibiscus çayı.', tooltip: 'Yeni', price: 130, image: 'hibiscus-çay.jpg' },
    { productId: 184, categoryName: 'çaylar', productName: 'Ihlamur', description: 'Sıcak ıhlamur çayı.', tooltip: 'Yeni', price: 130, image: 'ıhlamur-çay.jpg' },
    { productId: 185, categoryName: 'çaylar', productName: 'Kış Çayı', description: 'Kış çayı karışımı.', tooltip: 'Yeni', price: 130, image: 'kışçayı-çay.jpg' },
    { productId: 186, categoryName: 'çaylar', productName: 'Kuş Burnu', description: 'Sıcak kuşburnu çayı.', tooltip: 'Yeni', price: 130, image: 'kuşburnu-çay.jpg' },
    { productId: 187, categoryName: 'çaylar', productName: 'Nane Limon', description: 'Sıcak nane limon.', tooltip: 'Yeni', price: 130, image: 'nane-limon-çay.jpg' },
    { productId: 188, categoryName: 'çaylar', productName: 'Papatya Çayı', description: 'Sıcak papatya çayı.', tooltip: 'Yeni', price: 130, image: 'papatya-çay.jpg' },
    { productId: 189, categoryName: 'çaylar', productName: 'Quattro Special', description: 'Özel karışım bitki çayı.', tooltip: 'Yeni', price: 150, image: 'papatya-çay.jpg' },
    { productId: 190, categoryName: 'çaylar', productName: 'Yasemin Çay', description: 'Sıcak yasemin çayı.', tooltip: 'Yeni', price: 130, image: 'yasemin-çay.jpg' },
    { productId: 191, categoryName: 'çaylar', productName: 'Yeşil Çay', description: 'Sıcak yeşil çay.', tooltip: 'Yeni', price: 130, image: 'yeşil-çay.jpg' },




    { productId: 192, categoryName: 'special-soğuklar', productName: 'Ice Almond Latte', description: 'Buzlu badem aromalı latte.', tooltip: 'Yeni', price: 220, image: 'ice-almondlatte-specialsoguk.jpg' },
    { productId: 193, categoryName: 'special-soğuklar', productName: 'Ice Choco-Banana Latte', description: 'Buzlu çikolata-muz aromalı latte.', tooltip: 'Yeni', price: 220, image: 'ice-choco-banana-latte-specialsoguk.jpg' },
    { productId: 194, categoryName: 'special-soğuklar', productName: 'Ice Cocoster Latte', description: 'Buzlu hindistan cevizi aromalı latte.', tooltip: 'Yeni', price: 220, image: 'ice-cocoster-specialsoguk.jpg' },
    { productId: 196, categoryName: 'special-soğuklar', productName: 'Ice Pecan Caramel Latte', description: 'Buzlu pekan-karamel aromalı latte.', tooltip: 'Yeni', price: 220, image: 'ice-pecan-caramel-specialsoguk.jpg' },
    { productId: 197, categoryName: 'special-soğuklar', productName: 'Ice Pumpkin Spice Latte', description: 'Buzlu pumpkin spice latte.', tooltip: 'Yeni', price: 200, image: 'ice-pumpkin-spice-latte-specialsoguk.jpg' },
    { productId: 240, categoryName: 'special-soğuklar', productName: 'Ice Quattro Latte', description: 'Ice Quattro Latte ferah ve dengeli içimiyle günün her anına eşlik eder.', tooltip: 'Yeni', price: 220, image: 'ice-quattro-latte-specialsoguk.jpg' },


    { productId: 200, categoryName: 'burgerler', productName: 'Hawai Burger', description: 'Izgara burger köftesi,  özel soslu mushroom mantar, cheddar sos, karamelize soğan yanında patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 460, image: 'hawai-burger.jpg' },
    { productId: 201, categoryName: 'burgerler', productName: 'Smash Burger', description: 'Double ızgara burger köftesi cheddar sos, karamelize soğan, yanında patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 550, image: 'smash-burger.jpg' },
    { productId: 202, categoryName: 'burgerler', productName: 'Miami Burger', description: 'Izgara burger köftesi, karamelize soğan, mayonezli isli köz patlıcan, rosebeef dilimleri yanında patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 460, image: 'miami-burger.jpg' },
    { productId: 203, categoryName: 'burgerler', productName: 'Çıtır Tavuk Burger', description: 'Panelenmiş çıtır tavuk pirzola, kornişon turşu, cheddar sos, karamelize soğan, coleslaw salata, yanında  patates cips ve dip sos ile servis edilir.', tooltip: 'En çok satan', price: 350, image: 'çıtır-tavuk-burger.jpg' },

    { productId: 204, categoryName: 'sıcak-içecekler', productName: 'Sıcak Çikolata', description: 'Yoğun kakao aromalı sıcak çikolata.', tooltip: 'Yeni', price: 180, image: 'sıcak-çikolata-sıcakiçecek.jpg' },
    { productId: 204, categoryName: 'sıcak-içecekler', productName: 'Filtre Kahve', description: 'Filtre Kahve aromatik yapısı ve dengeli lezzetiyle keyifli bir içim sunar.', tooltip: 'Yeni', price: 130, image: 'filtre-kahve-sıcakiçecek.jpg' },

    { productId: 205, categoryName: 'sıcak-içecekler', productName: 'Sütlü Filtre Kahve', description: 'Yumuşak içimli sütlü filtre kahve.', tooltip: 'Yeni', price: 140, image: 'sütlü-filtre-kahve-sıcakiçecek.jpg' },
    { productId: 206, categoryName: 'sıcak-içecekler', productName: 'Türk Kahvesi (Az Şekerli)', description: 'Az şekerli geleneksel Türk kahvesi.', tooltip: 'Yeni', price: 120, image: 'türk-kahvesi-sıcakiçecek.jpg' },
    { productId: 207, categoryName: 'sıcak-içecekler', productName: 'Türk Kahvesi (Orta)', description: 'Orta şekerli geleneksel Türk kahvesi.', tooltip: 'Yeni', price: 120, image: 'türk-kahvesi-sıcakiçecek.jpg' },
    { productId: 208, categoryName: 'sıcak-içecekler', productName: 'Türk Kahvesi (Sade)', description: 'Şekersiz geleneksel Türk kahvesi.', tooltip: 'Yeni', price: 120, image: 'türk-kahvesi-sıcakiçecek.jpg' },
    { productId: 209, categoryName: 'sıcak-içecekler', productName: 'Türk Kahvesi (Şekerli)', description: 'Şekerli geleneksel Türk kahvesi.', tooltip: 'Yeni', price: 120, image: 'türk-kahvesi-sıcakiçecek.jpg' },
    { productId: 209, categoryName: 'sıcak-içecekler', productName: 'Double Türk Kahvesi', description: 'Daha yoğun lezzet isteyenler için double Türk kahvesi.', tooltip: 'Yeni', price: 160, image: 'double-türk-kahvesi-sıcakiçecekler.jpg' },
    { productId: 209, categoryName: 'sıcak-içecekler', productName: 'Osmanlı Kahvesi', description: 'Daha yoğun lezzet isteyenler için double Türk kahvesi.', tooltip: 'Yeni', price: 120, image: 'osmanlı-kahvesi-sıcakiçecek.jpg' },
    { productId: 209, categoryName: 'sıcak-içecekler', productName: 'Menengiç Kahvesi', description: 'Daha yoğun lezzet isteyenler için double Türk kahvesi.', tooltip: 'Yeni', price: 120, image: 'menengiç-kahvesi-sıcakiçecek.jpg' },


    { productId: 210, categoryName: 'atıştırmalıklar', productName: 'Bonfrit', description: 'Kızarmış baharatlı parmak patatesler, dip sos ile servis edilir.', tooltip: 'Yeni', price: 160, image: 'patates-atıştırmalık.jpg' },
    { productId: 211, categoryName: 'atıştırmalıklar', productName: 'Çıtır Tavuk', description: 'Kızarmış paneli çıtır tavuk parçaları, patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 330, image: 'çıtır-tavuk-atıştırmalık.jpg' },
    { productId: 212, categoryName: 'atıştırmalıklar', productName: 'Karışık Sepet', description: 'Sigara böreği, sosis, soğan halkası, çıtır tavuk, patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 390, image: 'karışık-sepet-atıştırmalık.jpg' },
    { productId: 213, categoryName: 'atıştırmalıklar', productName: 'Sigara Böreği', description: 'Kızarmış sigara börekleri, patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 270, image: 'sigara-böreği-atıştırmalık.jpg' },
    { productId: 214, categoryName: 'atıştırmalıklar', productName: 'Soğan Halkası', description: 'Panelenmiş çıtır soğan, patates cips ve dip sos ile servis edilir.', tooltip: 'Yeni', price: 220, image: 'soğan-halkası-atıştırmalık.jpg' }


  ];



  getAll(): Product[] {  // tüm ürünleri döndürür
    return this.Products;
  }



  getByCategory(categoryName: string): Product[] {
    return this.Products.filter(p => p.categoryName === categoryName);
  }

}
