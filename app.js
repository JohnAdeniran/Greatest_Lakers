const kobeBtn = document.querySelector("#buttonOne");
const magicBtn = document.querySelector("#buttonTwo");
const shaqBtn = document.querySelector("#buttonThree");
const displayImage = document.querySelector("img");
const paragraphDisplay = document.querySelector("p");
const headerName = document.querySelector("h2");

const removeDisplayHidden = function () {
  paragraphDisplay.classList.remove("hidden");
  headerName.classList.remove("hidden");
  displayImage.classList.remove("hidden");
};

const addHiddenDisplay = function () {
  paragraphDisplay.classList.add("hidden");
  headerName.classList.add("hidden");
  displayImage.classList.add("hidden");
};
addHiddenDisplay();

magicBtn.addEventListener("click", function () {
  removeDisplayHidden();

  headerName.textContent = "MAGIC JOHNSON";
  paragraphDisplay.textContent = `Earvin "Magic" Johnson Jr. (born August 14, 1959) is an American former professional basketball player and former president of basketball operations of the Los Angeles Lakers of the National Basketball Association (NBA). Often regarded as the best point guard of all time,[1][2] Johnson is also considered to be one of the greatest players in NBA history.[3][4] He played for the Lakers for 13 seasons. After winning championships in high school and college, Johnson was selected first overall in the 1979 NBA draft by the Lakers. He won a championship and an NBA Finals Most Valuable Player Award in his rookie season, and won four more championships with the Lakers during the 1980s. Johnson retired abruptly in 1991 after announcing that he had contracted HIV, but returned to play in the 1992 All-Star Game, winning the All-Star MVP Award. After protests from his fellow players, he retired again for four years, but returned in 1996, at age 36, to play 32 games for the Lakers before retiring for the third and final time.`;

  displayImage.src =
    "https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/full/public/magic-johnson-action-portrait_header.jpeg?itok=HjCBvoYj";
});

kobeBtn.addEventListener("click", function () {
  removeDisplayHidden();

  displayImage.src =
    "https://images.unsplash.com/photo-1584770557404-a5d2a798e81a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA5fHxrb2JlJTIwYnJ5YW50fGVufDB8fDB8&auto=format&fit=crop&w=900&q=60";

  headerName.textContent = "KOBY BRYANT";

  paragraphDisplay.textContent =
    "Born in Philadelphia and partly raised in Italy, Bryant was recognized as the top high-school basketball player in the U.S. while at Lower Merion High School in Pennsylvania. The son of former NBA player Joe Bryant, he declared for the 1996 NBA draft after graduation, and was selected by the Charlotte Hornets with the 13th overall pick; the Hornets then traded him to the Lakers. As a rookie, Bryant earned a reputation as a high-flyer and a fan favorite by winning the 1997 Slam Dunk Contest, and he was named an All-Star by his second season. Despite a feud with teammate Shaquille O'Neal, the pair led the Lakers to three consecutive NBA championships from 2000 to 2002.";
});

shaqBtn.addEventListener("click", function () {
  removeDisplayHidden();

  displayImage.src =
    "https://image-cdn.essentiallysports.com/wp-content/uploads/20200710123059/34-shaq.jpg";

  headerName.textContent = "Shaquille O'Neal";
  paragraphDisplay.textContent = `Shaquille Rashaun "Shaq" O'Neal (/ʃəˈkiːl/ shə-KEEL; /ʃæk/ SHAK; born March 6, 1972) is an American former professional basketball player who is a sports analyst on the television program Inside the NBA on TNT. He played for six teams over his 19-year career in the National Basketball Association (NBA). At 7 ft 1 in (2.16 m) tall and 325 pounds (147 kg), O'Neal is regarded as one of the greatest basketball players of all time.[1][2][3]

    After playing college basketball for the LSU Tigers, O'Neal was drafted by the Orlando Magic with the first overall pick in the 1992 NBA draft. He quickly became one of the best centers in the league, winning Rookie of the Year in 1992–93 and leading his team to the 1995 NBA Finals. After four years with the Magic, O'Neal signed as a free agent with the Los Angeles Lakers. They won three consecutive championships in 2000, 2001, and 2002. Amid tension between O'Neal and Kobe Bryant, O'Neal was traded to the Miami Heat in 2004, and his fourth NBA championship followed in 2006. Midway through the 2007–2008 season he was traded to the Phoenix Suns. After a season-and-a-half with the Suns, O'Neal was traded to the Cleveland Cavaliers in the 2009–10 season.[4] O'Neal played for the Boston Celtics in the 2010–11 season before retiring.[5]`;
});
