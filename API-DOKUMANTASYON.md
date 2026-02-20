# Mock API Dokümantasyonu

## Genel Bakış

Bu proje, Express.js kullanarak oluşturulmuş bir Mock API sunucusudur. Backend servislere ihtiyaç duymadan kapsamlı bir eğitim/öğrenme platformu API'si simülasyonu sağlar. API, port 5000 üzerinde çalışır ve CORS desteği ile tüm origin'lerden erişime izin verir.

## Teknik Mimari

### Kullanılan Teknolojiler
- **Framework:** Express.js v4.17.1
- **Parser:** body-parser v1.19.0
- **Babel:** ES6+ desteği için babel-cli ve babel-preset-es2015
- **Node.js:** ES6 modül sistemi (type: "module")

### Proje Yapısı
```
mockapi/
├── app.js              # Ana sunucu ve route tanımları
├── db.js               # Tüm mock veri setleri
├── package.json        # Proje bağımlılıkları
├── dene.js             # Test dosyası
└── README.md           # Proje açıklaması
```

### Sunucu Konfigürasyonu
- **Port:** 5000
- **CORS:** Tüm origin'lere açık (*)
- **İzin verilen metodlar:** GET, POST, OPTIONS, PUT, PATCH, DELETE
- **Body Parser:** JSON ve URL-encoded desteği

## API Endpoint'leri

### 1. Kullanıcı Yönetimi

#### GET /user
Kullanıcı profil bilgilerini döner.

**Response:**
```json
{
  "data": {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "fullname": "John Doe",
    "avatar": "https://.../profile.png",
    "badge": "High Performance",
    "progress": 55,
    "apps": [...]
  },
  "success": "true",
  "message": "waiting for status code 200"
}
```

### 2. Çalışma Planı

#### GET /study-plan
Kullanıcının çalışma planını ve ilerleme durumunu döner.

**Veri Yapısı:**
- Courses (Kurslar)
- Workshop (Atölye)
- Quizzes (Sınavlar)
- Reading (Okuma)
- Test

Her bir öğe için:
- İlerleme yüzdesi (progress)
- Bildirimler (notifications)
- Aksiyon butonları

### 3. Uygulamalar

#### GET /apps
Kullanılabilir uygulamaları listeler.

**Uygulamalar:**
- courses (Kurslar)
- digibook (Dijital Kitap)
- wordy (Atölye)
- reading (Okuma)
- sozluk (Sözlük)
- test (Test)
- deneme (Quiz)
- cluebank (İpucu Bankası)
- dokumanlar (Dokümanlar)

### 4. Sınav Sistemi

#### GET /examsInfo
Sınav sistemi hakkında genel bilgi döner (nasıl çalışır, video, gruplar).

#### GET /exams
Tüm sınavları listeler.

#### GET /exams/:group
Belirli bir gruptaki sınavları döner.

**Gruplar:**
- `test` - Test Otomasyonu Sınavları
- `devops` - DevOps Sınavları
- `agile` - Agile Sınavları
- Diğer - Tüm sınavlar

### 5. Test Sistemi

#### GET /testsInfo
Test sistemi hakkında bilgi döner.

#### GET /test
Tüm testleri listeler.

### 6. Okuma Materyalleri

#### GET /readingInfo
Okuma sistemi hakkında bilgi döner.

#### GET /reading
Tüm okuma materyallerini listeler.

#### GET /reading/:id
Belirli bir okuma materyalini döner.

### 7. Dokümanlar

#### GET /documentsInfo
Doküman sistemi hakkında bilgi döner.

#### GET /documents
Development grubuna ait dokümanları döner.

#### GET /documents/:group
Belirli bir gruptaki dokümanları döner.

**Gruplar:**
- `test` - Test Dokümanları
- `devops` - DevOps Dokümanları
- Diğer - Genel dokümanlar

#### GET /document/:id
Belirli bir dokümanı döner (ID: 1, 3, 7).

### 8. Kurslar

#### GET /lessonsInfo
Kurs sistemi hakkında bilgi döner:
- Neden Ronwell Academy
- Nasıl Yardım Alınır
- Tanıtım videosu
- Kurs grupları (Test Automation, Cloud, SAP, Development, DevOps, Data)

#### GET /courses
Tüm dersleri listeler.

#### GET /courses/:group
Belirli bir gruptaki kursları döner.

**Gruplar:**
- `test` - Test Automation Kursları
- `devops` - DevOps Kursları
- `cloud` - Cloud Kursları
- `sap` - SAP Kursları
- `data` - Data Kursları
- Diğer - Tüm kurslar

#### GET /course/:id
Belirli bir kursun detaylarını döner (ID: 0-6).

### 9. Dijital Kitaplar

#### GET /digibooksInfo
Dijital kitap sistemi hakkında bilgi döner.

#### GET /digibooks
Tüm dijital kitapları listeler.

### 10. İpucu Bankası (Cluebank)

#### GET /cluebanksInfo
İpucu bankası sistemi hakkında bilgi döner.

#### GET /cluebanks
Tüm ipucu bankalarını listeler.

#### GET /cluebankQuestions
Ipucu bankası sorularını döner.

#### GET /cluebankGrammars
Gramer ipuçlarını döner.

#### GET /cluebankStrategies
Strateji ipuçlarını döner.

#### GET /cluebankWords
Kelime ipuçlarını döner.

#### GET /cluebank/1
Belirli bir ipucu bankasını döner.

### 11. Bildirimler

#### GET /notifications
Kullanıcı bildirimlerini döner.

**Bildirim Yapısı:**
- id
- read (okundu/okunmadı)
- app (hangi uygulama)
- icon
- text
- time
- link

### 12. Senkronizasyon API'leri (ACDB-Sync)

#### GET /acdb-sync/person/all
Tüm kişileri döner.

#### GET /acdb-sync/languages
Dilleri döner.

#### GET /acdb-sync/profiles
Profilleri döner.

#### POST /acdb-sync/profiles
Yeni profil ekler.

**Gerekli Alanlar:**
- title (zorunlu)
- description

#### POST /acdb-sync/configuration
Konfigürasyon ayarları ekler.

#### POST /acdb-sync/person/set
Yeni kişi ekler.

**Eklenen Kişi:**
- firstname: "Alper"
- lastname: "Yilmaz"
- title: "Engineer"
- description: "User with kone profile"

#### POST /acdb-sync/person/remove
Kişi siler (şu an sadece placeholder).

### 13. Test API'leri

#### GET /api/v1.0/tested example
Test endpoint'i döner.

#### GET /api/v1.0/test1
Status code 201 ile test başarı mesajı döner.

#### GET /api/v1.0/configuration
Konfigürasyon bilgisi döner.

#### POST /api/v1.0/badges/block
Badge engelleme (placeholder).

#### POST /api/v1.0/persons/delete
Kişi silme (placeholder).

#### GET /api/v1.0/merge/ronwellTraining1
Merge işlemi (status 500 döner).

## Veri Setleri Detayı

### 1. User Dataset (Kullanıcı)
```javascript
{
  "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "fullname": "John Doe",
  "avatar": "https://.../profile.png",
  "badge": "High Performance",
  "progress": 55,
  "apps": [9 uygulama]
}
```

### 2. Notifications Dataset (Bildirimler)
5 adet örnek bildirim:
- Okunmamış bildirimler (read: false)
- Okunmuş bildirimler (read: true)
- Farklı uygulamalardan bildirimler (wordy, resource, lesson, test)
- Her biri link içerir

### 3. Notes Dataset (Notlar)
12 adet okuma notu:
- Benjamin Franklin 2 ünitesinden
- Kelime listesi bölümünden
- Oluşturulma ve güncellenme tarihleri

### 4. Study Plan Dataset (Çalışma Planı)
5 modül:
1. **Courses** - %80 ilerleme
2. **Workshop** - %100 ilerleme
3. **Quizzes** - %25 ilerleme
4. **Reading** - %65 ilerleme
5. **Test** - %0 ilerleme

Her modül bildirimler içerir.

### 5. Lessons Dataset (Dersler)
Çok sayıda kurs içerir:
- **Test Automation:** Ranorex, SoapUI, REST, Cypress, Mobile Testing
- **Cloud:** AWS, AppSync
- **SAP:** ERP Kursları (6 adet)
- **DevOps:** Jenkins, CI/CD
- **Data:** Veri kursları
- **Load Testing:** JMeter

Her ders:
- ID, başlık, etiketler, grup, tarih, saat
- İlerleme yüzdesi
- Ziyaret ve aktiflik durumu

### 6. Lessons Info Dataset
- **What:** Ronwell Academy hakkında açıklama
- **How Works:** Nasıl yardım alınır
- **Video:** Tanıtım videosu (YouTube embed)
- **Groups:** 8 grup (All, Test, Cloud, SAP, Development, DevOps, Data, Translation)

### 7. Cluebank Dataset (İpucu Bankası)
Kapsamlı eğitim materyalleri:
- **Questions:** Soru havuzu
- **Grammars:** Gramer kuralları
- **Strategies:** Sınav stratejileri
- **Words:** Kelime listesi ve anlamları

### 8. Tests Dataset (Testler)
Farklı alanlarda testler:
- Multiple choice sorular
- 4 seçenek
- Doğru cevap işaretli
- Açıklamalar

### 9. Exams Dataset (Sınavlar)
Üç kategoride sınav:
- Test Automation
- DevOps
- Agile

Her sınav:
- Soru sayısı
- Süre
- Zorluk seviyesi
- Geçme notu

### 10. Reading Dataset (Okuma)
Çok sayıda okuma materyali:
- Farklı zorluk seviyeleri (A1-C2)
- Metin içeriği
- Kelime listeleri
- Anlama soruları

### 11. Documents Dataset (Dokümanlar)
Teknik dokümanlar:
- Development dokümanları
- Test dokümanları
- DevOps dokümanları
- PDF dosyaları
- Döküman metadata (sayfa sayısı, boyut, tip)

### 12. Digibooks Dataset (Dijital Kitaplar)
E-kitap koleksiyonu:
- Kitap adı, yazar
- Kapak görseli
- İlerleme durumu
- Kategori

### 13. Apps Dataset (Uygulamalar)
9 uygulama modülü:
1. Courses (Kurslar)
2. Digibook (Dijital Kitap)
3. Wordy (Atölye)
4. Reading (Okuma)
5. Sozluk (Sözlük)
6. Test
7. Deneme (Quiz)
8. Cluebank (İpucu Bankası)
9. Dokumanlar (Dokümanlar)

Her uygulama:
- ID, isim, başlık
- Favori olup olmadığı

## API Çalışma Mantığı

### 1. Sunucu Başlatma
```javascript
app.listen(5000, () => {
  console.log(`server running on port 5000`)
});
```

### 2. Request İşleme Akışı
1. **CORS Middleware:** Her istekten önce CORS header'ları eklenir
2. **Body Parsing:** JSON ve URL-encoded datalar parse edilir
3. **Route Matching:** İstek uygun route'a yönlendirilir
4. **Data Retrieval:** db.js dosyasından ilgili veri çekilir
5. **Response Formation:** Standart format ile response oluşturulur

### 3. Response Formatı
Tüm GET istekleri için standart format:
```json
{
  "data": {...}, // İlgili veri
  "success": "true",
  "message": "waiting for status code 200"
}
```

### 4. POST İşlemleri
POST endpoint'leri genel olarak:
- Gelen veriyi validate eder
- Gerekli alanları kontrol eder
- Placeholder data ile yanıt verir
- Status code 201 (Created) döner

### 5. Error Handling
POST isteklerinde hata durumları:
```json
{
  "success": "false",
  "message": "title is required" // veya başka hata mesajı
}
```
Status code: 400 (Bad Request)

### 6. Dinamik Route'lar
API parametrik route'ları destekler:
- `/reading/:id` - Belirli okuma materyali
- `/courses/:group` - Belirli grup kursları
- `/exams/:group` - Belirli grup sınavları
- `/documents/:group` - Belirli grup dokümanları
- `/course/:id` - Belirli ders detayı

### 7. Veri Gruplandırma
Veriler kategorilere ayrılmıştır:
- **Test Automation:** Ranorex, Selenium, Cypress
- **DevOps:** Jenkins, CI/CD, Docker
- **Cloud:** AWS, Azure
- **SAP:** ERP, Fiori
- **Data:** Veri analizi, Data Science

## Kullanım Senaryoları

### Senaryo 1: Kullanıcı Girişi
1. `GET /user` - Kullanıcı bilgilerini al
2. `GET /apps` - Kullanılabilir uygulamaları listele
3. `GET /study-plan` - Çalışma planını göster
4. `GET /notifications` - Bildirimleri getir

### Senaryo 2: Kurs İzleme
1. `GET /lessonsInfo` - Kurs bilgilerini al
2. `GET /courses/test` - Test automation kurslarını listele
3. `GET /course/0` - Belirli kursu aç
4. İlerleme güncellenir (mock data'da simulation)

### Senaryo 3: Sınava Hazırlık
1. `GET /examsInfo` - Sınav bilgilerini al
2. `GET /exams/test` - Test sınavlarını listele
3. `GET /test` - Test sorularını çöz
4. `GET /reading` - Okuma materyallerini çalış

### Senaryo 4: Dokümantasyon Erişimi
1. `GET /documentsInfo` - Doküman bilgilerini al
2. `GET /documents/devops` - DevOps dokümanlarını listele
3. `GET /document/1` - Belirli dokümanı görüntüle

## Geliştirme ve Test

### API'yi Başlatma
```bash
node app.js
```

### Bağımlılıkları Yükleme
```bash
npm install
```

### Test Etme
Tüm endpoint'ler GET metodu ile test edilebilir:
```bash
curl http://localhost:5000/user
curl http://localhost:5000/courses/test
curl http://localhost:5000/reading/1
```

POST endpoint'leri için:
```bash
curl -X POST http://localhost:5000/acdb-sync/person/set \
  -H "Content-Type: application/json" \
  -d '{"title":"test"}'
```

## Notlar ve Özel Durumlar

1. **Duplicate Routes:** `/exams/:group` endpoint'i kodda iki kez tanımlanmış (satır 77 ve 117)

2. **Placeholder Functions:** Bazı fonksiyonlar sadece tanımlanmış, implement edilmemiş:
   - `assignBadge()`
   - `unassignBadge()`
   - `unassignTransitionalBadge()`

3. **Commented Code:** `profiles` import'u yorum satırında (db2.js)

4. **Undefined Variables:** `persons` ve `profiles` değişkenleri kullanılıyor ama tanımlanmamış

5. **Typo'lar:** 
   - `req.descriptionn` yerine `req.body.description` olmalı
   - `persone` yerine `persons` olmalı

6. **Veri Boyutu:** db.js dosyası 26,317 satır - gerçek production'da database kullanılmalı

7. **CORS:** Tüm origin'lere açık - production'da kısıtlanmalı

## Güvenlik Notları

⚠️ **Dikkat:** Bu bir MOCK API'dir ve production kullanımı için uygun değildir:
- Authentication/Authorization yok
- CORS tamamen açık
- Input validation minimal
- Gerçek database bağlantısı yok
- Rate limiting yok
- Error logging yok

## Özet

Bu Mock API, kapsamlı bir eğitim platformu simülasyonu sağlar. Express.js kullanarak basit ama etkili bir yapı sunar. Tüm veriler statik olarak db.js dosyasında tutulur ve API endpoint'leri bu veriye çeşitli yollarla erişim sağlar. Geliştirme ve test amaçları için idealdir, ancak production kullanımı için gerçek backend servislere dönüştürülmelidir.

**Toplam Endpoint Sayısı:** 40+  
**Veri Seti Boyutu:** ~26,000 satır  
**Desteklenen Modüller:** 9 ana uygulama modülü  
**Kurs Kategorileri:** 6 farklı kategori  
**Port:** 5000  
**Framework:** Express.js v4.17.1
