# hurriyet_pratik
Hurriyet gazetesi içeriklerini hızlı okuma

NodeJS script ile yazılmıştır.
express ile server kurularak sunucu olarak da hizmet verebilir. 
Hurriyet gazetesi anasayfada bulunan başlıklardan gündem olanlar alınıp
içeriklerinin ilk özet metinleri çıkarılarak 
html olarak gmail kullanılarak mail atılmıştır. 

Kullanımından sorumluluk kabul edilmemektedir. 
Herkes açık kullanabilir. 

çalıştırmak için: 
$node webscrap.js
yazıp

localhost:3000/scrape 

yazabilirsiniz. 

gmailden göndermek için ise düşük güvenlikli uygulamalara izin ver seçeneğini aktif hale getirmelisiniz.
buradan: https://myaccount.google.com/lesssecureapps
