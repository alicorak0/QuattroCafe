import { Injectable } from '@angular/core';
import { Product } from '../models/productModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { productId: 1, categoryName: 'ızgaralar', productName: 'Tavuk Göğsü Izgara', description: 'Özel baharatlarla marine edilmiş, kömür ateşinde ızgara tavuk göğsü.', tooltip: 'En çok satan', price: 200, image: 'ızgaralar-1.jpg' },
    { productId: 2, categoryName: 'ızgaralar', productName: 'Tavuk Kanat Izgara', description: 'Çıtır dış yüzey, sulu iç dokuya sahip, köz tadında ızgara kanatlar.', tooltip: 'En çok satan', price: 250, image: 'ızgaralar-2.jpg' },
    { productId: 3, categoryName: 'ızgaralar', productName: 'Barbekülü Kanat', description: 'Özel barbekü sosuyla harmanlanmış, fırın ve ızgara lezzetini bir arada sunar.', tooltip: 'En çok satan', price: 250, image: 'ızgaralar-3.jpg' },

    {
      productId: 4,
      categoryName: 'dönerler',
      productName: 'Döner Porsiyon',
      description: 'Günlük hazırlanan tavuk döner taze salata ile servis edilir.',
      tooltip: 'En çok satan',
      price: 200,
      image: 'dönerler-1.jpg'
    },
    {
      productId: 5,
      categoryName: 'dönerler',
      productName: 'Pilavüstü Döner',
      description: 'Bol pilav üzerine eklenen sıcak tavuk döner, salata ile tamamlanır.',
      tooltip: 'En çok satan',
      price: 200,
      image: 'dönerler-2.jpg'
    },
    {
      productId: 6,
      categoryName: 'dönerler',
      productName: 'Tavuk Döner Dürüm',
      description: 'Lavaş ekmeğe sarılmış tavuk döner, yeşillik ve soslarla hazırlanır.',
      tooltip: 'En çok satan',
      price: 200,
      image: 'dönerler-3.jpg'
    },
    {
      productId: 7,
      categoryName: 'dönerler',
      productName: 'Zurna Dürüm',
      description: 'Büyük lavaş içinde bol tavuk döner, doyurucu ve lezzetli bir seçenek.',
      tooltip: 'En çok satan',
      price: 200,
      image: 'dönerler-4.jpg'
    },
    {
      productId: 8,
      categoryName: 'dönerler',
      productName: 'Döner Sandviç',
      description: 'Taze ekmek arasında bol tavuk döner, isteğe göre sos ve yeşilliklerle.',
      tooltip: 'En çok satan',
      price: 120,
      image: 'dönerler-5.jpg'
    },


    { productId: 9, categoryName: 'aperatifler', productName: 'Patates Kızartması', description: 'Günlük taze patateslerden, dışı çıtır içi yumuşak kızartma.', tooltip: 'En çok satan', price: 100, image: 'aperatifler-1.jpg' },
    { productId: 10, categoryName: 'aperatifler', productName: 'Soğan Halkası', description: 'Altın sarısı kaplamasıyla çıtır çıtır soğan halkaları.', tooltip: 'En çok satan', price: 80, image: 'aperatifler-2.jpg' },
    { productId: 10, categoryName: 'aperatifler', productName: 'Şinitzel', description: 'Altın sarısı kaplamasıyla çıtır çıtır soğan halkaları.', tooltip: 'En çok satan', price: 80, image: 'aperatifler-3.jpg' },

    { productId: 11, categoryName: 'içecekler', productName: 'Coca Cola', description: 'Buz gibi servis edilen ferahlatıcı kola.', tooltip: 'En çok satan', price: 60, image: 'içecekler-1.jpg' },
    { productId: 12, categoryName: 'içecekler', productName: 'Fanta', description: 'Portakal aromalı, serinletici gazlı içecek.', tooltip: 'En çok satan', price: 60, image: 'içecekler-2.jpg' },
    { productId: 13, categoryName: 'içecekler', productName: 'Schweppes', description: 'Kendine özgü aromasıyla ferahlatıcı gazlı içecek.', tooltip: 'En çok satan', price: 60, image: 'içecekler-3.jpg' },
    { productId: 14, categoryName: 'içecekler', productName: 'Fuse Tea Mango', description: 'Egzotik mango aromalı soğuk çay.', tooltip: 'En çok satan', price: 60, image: 'içecekler-4.jpg' },
    { productId: 15, categoryName: 'içecekler', productName: 'Fuse Tea Karpuz', description: 'Yaz ferahlığı sunan karpuz aromalı soğuk çay.', tooltip: 'En çok satan', price: 60, image: 'içecekler-5.jpg' },
    { productId: 13, categoryName: 'içecekler', productName: 'Fuse Tea Şeftali', description: 'Doğal şeftali aromasıyla hafif ve ferah.', tooltip: 'En çok satan', price: 60, image: 'içecekler-6.jpg' },
    { productId: 14, categoryName: 'içecekler', productName: 'Fuse Tea Limon', description: 'Limon aromalı, serinletici soğuk çay.', tooltip: 'En çok satan', price: 60, image: 'içecekler-7.jpg' },

    { productId: 15, categoryName: 'çiğ-ürünler', productName: 'Piliç But', description: 'Günlük ve taze piliç but, pişirmeye hazır.', tooltip: 'En çok satan', price: 180, image: 'çiğ-ürünler-1.jpg' },
    { productId: 16, categoryName: 'çiğ-ürünler', productName: 'Piliç Bonfile', description: 'Yağsız ve yumuşak dokulu piliç bonfile.', tooltip: 'En çok satan', price: 240, image: 'çiğ-ürünler-2.jpg' },
    { productId: 17, categoryName: 'çiğ-ürünler', productName: 'Bütün Piliç', description: 'Doğal beslenmiş, bütün halde taze piliç.', tooltip: 'En çok satan', price: 90, image: 'çiğ-ürünler-3.jpg' },
    { productId: 18, categoryName: 'çiğ-ürünler', productName: 'Piliç Kanat', description: 'Izgara ve fırın için ideal, taze piliç kanat.', tooltip: 'En çok satan', price: 270, image: 'çiğ-ürünler-4.jpg' },
    { productId: 19, categoryName: 'çiğ-ürünler', productName: 'Piliç Bonfile', description: 'Hızlı pişen, pratik kullanım için bonfile.', tooltip: 'En çok satan', price: 240, image: 'çiğ-ürünler-5.jpg' },
    { productId: 20, categoryName: 'çiğ-ürünler', productName: 'Piliç Baget', description: 'Lezzetli ve sulu yapısıyla taze piliç baget.', tooltip: 'En çok satan', price: 200, image: 'çiğ-ürünler-6.jpg' },
    { productId: 21, categoryName: 'çiğ-ürünler', productName: 'Piliç But İncik', description: 'Fırın ve tencere yemekleri için ideal piliç incik.', tooltip: 'En çok satan', price: 240, image: 'çiğ-ürünler-7.jpg' },

    {
      productId: 15,
      categoryName: 'mezeler',
      productName: 'Haydari',
      description: 'Süzme yoğurt, sarımsak ve dereotu ile hazırlanan klasik meze.',
      tooltip: 'En çok satan',
      price: 100,
      image: 'mezeler-1.jpg'
    },
    {
      productId: 16,
      categoryName: 'mezeler',
      productName: 'Havuç Tarator',
      description: 'Zeytinyağında sotelenmiş havuç, yoğurt ve cevizle hazırlanır.',
      tooltip: 'En çok satan',
      price: 100,
      image: 'mezeler-2.jpg'
    },
    {
      productId: 17,
      categoryName: 'mezeler',
      productName: 'Acılı Ezme',
      description: 'Domates, biber ve baharatlarla hazırlanan, hafif acılı meze.',
      tooltip: 'En çok satan',
      price: 100,
      image: 'mezeler-3.jpg'
    },
    {
      productId: 18,
      categoryName: 'mezeler',
      productName: 'Şakşuka',
      description: 'Kızartılmış patlıcan ve sebzelerle hazırlanan, domates soslu meze.',
      tooltip: 'En çok satan',
      price: 100,
      image: 'mezeler-4.jpg'
    },

  ];

  getAll(): Product[] {  // tüm ürünleri döndürür
    return this.products;
  }



  getByCategory(categoryName: string): Product[] {
    return this.products.filter(p => p.categoryName === categoryName);
  }

}
