# DangerZone
Aplikacja stworzona na Hack Heroes 2019

DangerZone to mapa zagrożeń uaktualniana online w czasie rzeczywistym. Zasada jej działania jest bardzo prosta. Aplikacja pobiera dane o zagrożeniach w pięciu kategoriach (epidemie, katastrofy naturalne, zmasowane ataki terrorystyczne, działania zbrojne, zanieczyszczenia środowiska) i wyświetla je na mapie. Zagrożenia można również zgłaszać. W tym celu należy rozwinąć menu, gdzie - jeśli użytkownik zezwolił na pobranie lokalizacji - powinny się już pojawić jego współrzędne. Użytkownik ma możliwość wybrania kategorii do jakiej należy zagrożenie i zgłoszenia go. Nowe zagrożenie zostaje dodane do bazy danych i wyświetlone przy następnym odświeżeniu strony. 

 - Aplikacja może okazać się przydatna na wielu polach: 
 - Łatwiejsze utrzymanie kwarantanny. 
 - Łatwiejsze wysyłanie pomocy adekwatnej do rodzaju zagrożenia. 
 - Łatwiejsze zarządzanie zasobami różnych organizacji. 
 - ...i wiele innych. 

Strona i aplikacja zostały stworzone w języku angielskim, jako najpowszechniej używanym na świecie. 

Nasza aplikacja nie powstałaby bez kilku bibliotek, które nie są naszą własnością - nie stworzyliśmy ich i nie rościmy sobie do nich żadnych praw: 

 - Leaflet 
 - Mappa.js 
 - p5 

Aplikacja wykorzystuje najnowsze standardy webowe (HTML5: element canvas, geolokalizacja, itp., CSS3: przejścia, model Flexbox, itp., JavaScript) - frontend, oraz Pythona i micro-framework Flask – backend. 

Niektórych pomysłów nie zdążyliśmy zrealizować w czasie przeznaczonym na hackaton, niemniej zamierzamy dodać je w późniejszym czasie, aby usprawnić pracę aplikacji. Są to m.in.: 

 - Legenda mapy - niezbędna, aby szybko orientować się z jakimi zagrożeniami mamy do czynienia na danym obszarze. 
 - Wyświetlanie lokalizacji użytkownika.
 - Interakcja z mapą - np. Po kliknięciu na daną kropkę wyświetli się dymek z dokładniejszym opisem doświadczenia. 
 - Poprawa ostylowania, designu - wygląd aplikacji i wygoda korzystania z niej są również bardzo ważne. 
 - Algorytmy zabezpieczające przed tzw. "fake newsami", fałszywymi alarmami, itd. - rozważaliśmy kilka możliwości, m.in.: możliwość dodawania zagrożeń tylko przez lekarzy i oficjalne organizacje ("zwykli" ludzie mogli by jedynie wyświetlać zagrożenia), wykorzystanie dobrodziejstw algorytmów uczenia maszynowego, stworzenie takiego, który nauczyłby się rozpoznawać prawdziwe zagrożenia (np. po ilości zgłoszeń z danego obszaru), a nawet przewidywałby kolejne zagrożenia. 
 - Wykorzystanie Ajaxa do sprawnej komunikacji z backendem (np. możliwość ładowania treści bez ponownego odświeżania strony). 
 - Usystematyzowanie kategorii oraz dodanie nowych według potrzeby. 
 - Dodanie innych wersji językowych (na początku polskiej i francuskiej). 
 - Dodanie możliwości przeglądania mapy offline – przydatne w przypadku krótkotrwałych przerw w dostawie internetu. 
 
 Mamy nadzieję, że nasz projekt uratuje życie wielu osobom i usprawni działanie niejednej organizacji niosącej pomoc ludziom potrzebującym. 

Jerzy Kaczorowski i Jakub Kornacki, uczniowie 1 Liceum Ogólnokształcącego im. Mikołaja Kopernika w Łodzi 
