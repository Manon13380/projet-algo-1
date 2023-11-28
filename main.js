const prompt = require('prompt-sync')();

console.log(" Voici un jeu textuel avec des choix multiples : il faudra répondre à chaque question par A ou B pour avancer dans l'histoire. Faite les bons choix et amusez-vous bien ! \n")

// Question 1
let choice = prompt(" Dans un trou vivait un hobbit dans le village de Cul-De-Sac.\n Après le départ de son oncle, il hérita de tout ses bien dont une bague avec de grand pouvoir.\n Un soir, le magicien nommé Gandalf lui demanda si il l'avait bien caché et mis en sûreté car le mal veut s'en emparer...\n C'était Un Anneau pour les gouverner tous, un Anneau pour les trouver, un Anneau pour les amener tous et dans les ténèbre les lier. \n Voulez-vous prendre part à cette grande aventure ? \n Réponse A : Oui \n Réponse B : Non \n");
let table = [];
let playername = "";

for (let i = 0; i < 100; i++) {
    while (choice != "A" && choice != "B") {
        choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
    }
    // Réponse 1A
    if (choice == "A") {
        table.push(" Tu as décidé de prendre part à l'aventure \n");
        // question 2 sans choix
        choice = prompt(" Tu as accepté cette aventure, chaque grande aventure à son héro quel est ton nom hobbit ?\n");
        playername = choice;
        // question 3
        choice = prompt(`${playername}, tu doit partir car la comté est en danger tant que l'anneau unique n'est pas détruit. Part maintenant, je te rejoindrai à Bree à l'Auberge du Poney Fringuant.\n Sur la route tes amis te rejoignent pour cette aventure mais les sbires de Sauron ,appelés Nazgûl, sont à ta recherche. \n L'Anneau t'appelle et tu essaye de résister à le mettre.\n ${playername} Resiste-tu à le mettre ? \n Reponse A : Oui\n Réponse B : Non\n`);

        while (choice != "A" && choice != "B") {
            choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
        }
        if (choice == "A") {
            table.push(" Sur la route pour Bree, tu as été pourchassé par les Nazgûls et tu as décidé de résiter à l'Anneau pour leur échapper \n ");
            // question 4 
            choice = prompt(` Tu as choisi de ne pas mettre l'anneau. Tu réussi donc à échapper aux Nazgûl. \n A Bree, tu rentre dans l'auberge. Tu ne trouve pas Gandalf mais un homme nommé Grand-Pas souhaite vous aidez car des hobbits à Bree ne passe pas inaperçu.\n ${playername} Souhaite-tu suivre Grand-Pas ? \n Reponse A : Oui\n Reponse B : Non\n`);

            while (choice != "A" && choice != "B") {
                choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
            }
            if (choice == "A") {
                table.push(" Tu as rencontré Grand-pas à l'Auberge et tu as décidé de le suivre\n ");
                // question 5
                choice = prompt(` ${playername} Tu as décidé de suivre Grand-Pas. Après la nuit dans une nouvelle auberge, vous partez vers le royaume des elfes pour mettre l'anneau en sécurité.\n Une grande réunion se tient entre Hommes, Elfes, Nains et Hobbits pour déterminer le sort de l'anneau.\n La communauté de l'Anneau voit le jour afin de détruire celui-ci dans le Mordor.\n ${playername} souhaite-tu faire parti de cette communauté ?\n Réponse A : Oui\n Réponse B : Non\n`);

                while (choice != "A" && choice != "B") {
                    choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
                }
                if (choice == "A") {
                    table.push(" Au royaume des elfes, la communauté de l'Anneau s'est formée et tu as décidé d'en faire parti\n");
                    // question 6
                    choice = prompt(` ${playername} Tu fais désormais parti de la communauté de l'anneau. Vous partez en direction du Mordor.\n Une tempête de neige s'abbat sur la montagne.\n Gandalf vous demande quelle route prendre ? Par le col de Caradhras ou les mines de la Moria.\n Réponse A : Tu prends le Col\n Réponse B : Tu passes par les Mines\n`);

                    while (choice != "A" && choice != "B") {
                        choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
                    }
                    if (choice == "A") {
                        table.push(" Sur la route pour le Mordor, une forte tempête de neige s'abbat sur vous et tu as décidé de passer par le col de Caradhras. Mais Sarouman a bloqué le passage et \n tu as été obligé de passer par les mines\n");
                        // question 7
                        choice = prompt(` Tu as décidé de passer par le col. Mais Sarouman, un magicien, emplifi la tempête  et le col se retrouve impraticable.\n Passer par les mines est le seul moyen de traverser la montagne.\n Tu fait demi-tour et passe par les mines.\n La porte s'effondre, tu n'as plus qu'une seule issue mais les orques ont envahis les mines et ont réveillés le Balrog.\n Gandalf tente de l'arrêter mais tombe avec lui et vous lance une derniere parole " Fuyez pauvre fou".\n ${playername} veux-tu fuir ou rester ?\n Réponse A : Tu fuis\n Réponse B : Tu reste\n`);

                        while (choice != "A" && choice != "B") {
                            choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
                        }
                        if (choice == "A") {
                            table.push(" Tu as fui les mines. Te voilà hors de danger en attendant la suite de l'aventure... \n TO BE CONTINUED...");
                            console.log(" Tu as fui les mines et tu as trouvé la sortie.\n Hors de danger, tu te rappelle toutes les étapes de cette aventure : ");
                            console.log(table.toString());
                            break;
                        }
                        else if (choice == "B") {
                            table.push(" Tu es rester dans la mines, ce choix à causé ta mort... THE END ");
                            console.log(" Tu es rester dans les mines. Le Balrog étant tombé : les orques te pourchasse et tu reçoit une flèche. En mourant, tu vois défiler toutes les étapes de cette aventure :");
                            console.log(table.toString());
                            break;
                        }
                    }
                    else if (choice == "B") {
                        table.push(" Sur la route pour le Mordor, une forte tempête deneige s'abbat sur vous et tu as décidé de passer par les mines de la Moria\n");
                        // question 7
                        choice = prompt(`Tu as décidé de passer par les mines.\n La porte s'effondre, tu n'as plus qu'une seule issue mais les orques ont envahis les mines et ont réveillé le Balrog.\n Gandalf tente de l'arrêter sur le pont mais il tombe avec lui et vous lance une derniere parole " Fuyez pauvre fou". \n ${playername} Veux-tu fuir ou rester ?\n Réponse A : Tu fuis\n Réponse B : tu reste\n`);

                    }
                    if (choice == "A") {
                        table.push(" Tu as fui les mines. Te voilà hors de danger en attendant la suite de l'aventure... \n TO BE CONTINUED...");
                        console.log(" Tu as fui les mines et tu as trouvé la sortie.\n Hors de danger, tu te rappelle toutes les étapes de cette aventure : ");
                        console.log(table.toString());
                        break;

                    }
                    else if (choice == "B") {
                        table.push(" Tu es resté dans les mines, ce choix à causé ta mort... THE END ");
                        console.log(" Tu es resté dans les mines. Le Balrog étant tombé : les orques te pourchasse et tu reçoit une flèche. En mourant, tu vois défiler toutes les étapes de cette aventure :");
                        console.log(table.toString());
                        break;
                    }
                }
                else if (choice == "B") {
                    console.log(" Tu as décidé ne pas faire parti de la communauté de l'Anneau. Tu retourne à Cul-de-Sac en espérant vivre une petite vie tranquille. Fin.");
                    break;
                }
            }
            else if (choice == "B") {
                console.log(" Tu ne suis pas Grand-Pas. Les Nazgûls t'ont retrouvé et tué dans ton sommeil. L'Anneau reviens à Sauron. La terre du milieu n'est plus que ténèbre. Fin.");
                break;
            }
        }
        else if (choice == "B") {
            table.push(" Sur la route pour Bree, tu as été pourchassé par les Nazgûls et tu as décidé de ne pas résister à l'Anneau. Tu as réussi à leur échapper de justesse\n");
            // question 4
            choice = prompt(` ${playername} Tu met l'Anneau, les Nazgûls ressentent le pouvoir de l'Anneau et savent où tu te trouve.\n Grâce à tes amis, tu arrive tant bien que mal à échapper aux Nazgûls.\n A Bree, tu rentre dans l'auberge. Tu ne trouve pas Gandalf mais un homme nommé Grand-Pas souhaite vous aidez car des hobbits à Bree ne passe pas inaperçu.\n Souhaite-tu suivre Grand-Pas ?\n Reponse A : Oui\n Reponse B : Non\n`);

            while (choice != "A" && choice != "B") {
                choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
            }
            if (choice == "A") {
                table.push(" Tu as rencontré Grand pas à l'Auberge et tu as décidé de le suivre\n");
                // question 5
                choice = prompt(` ${playername} Tu as décidé de suivre Grand-Pas. Après la nuit dans une nouvelle auberge, vous partez vers le royaume des elfes pour mettre l'anneau en sécurité.\n Une grande réunion se tient entre Hommes, Elfes, Nains et Hobbits pour déterminer le sort de l'anneau.\n La communauté de l'Anneau voit le jour afin de détruire celui-ci dans le Mordor.\n ${playername} souhaite-tu faire parti de cette communauté ?\n Réponse A : Oui\n Réponse B : Non\n`);
                if (choice == "A") {
                    table.push(" Au royaume des elfes, la communauté de l'Anneau s'est formée et tu as décidé d'en faire parti\n");
                    // question 6
                    choice = prompt(` ${playername} Tu fais désormais parti de la communauté de l'anneau. Vous partez en direction du Mordor.\n Une tempête de neige s'abbat sur la montagne.\n Gandalf vous demande quelle route prendre ? Par le col de Caradhras ou les mines de la Moria.\n Réponse A : Tu prends le Col\n Réponse B : Tu passes par les Mines\n`);

                    while (choice != "A" && choice != "B") {
                        choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
                    }
                    if (choice == "A") {
                        table.push(" Sur la route pour le Mordor, une forte tempête de neige s'abbat sur vous et tu as décidé de passer par le col de Caradhras. Mais Sarouman à bloqué le passage et \n tu as été obligé de passer par les mines\n");
                        // question 7
                        choice = prompt(` Tu as décidé de passer par le col. Mais Sarouman, un magicien, emplifi la tempête  et le col se retrouve impraticable.\n Passer par les mines est le seul moyen de traverser la montagne.\n Tu fait demi-tour et passe par les mines.\n La porte s'effondre, tu n'as plus qu'une seule issue mais les orques ont envahis les mines et ont réveillés le Balrog.\n Gandalf tente de l'arrêter mais tombe avec lui et vous lance une derniere parole " Fuyez pauvre fou".\n ${playername} veux-tu fuir ou rester ?\n Réponse A : Tu fuis\n Réponse B : Tu reste\n`);

                        while (choice != "A" && choice != "B") {
                            choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
                        }
                        if (choice == "A") {
                            table.push(" Tu as fui les mines, te voilà hors de danger pour le moment. En attendant la suite de l'aventure... \n TO BE CONTINUED...");
                            console.log(" Tu as fui les mines et tu as trouvé la sortie.\n Hors de danger, tu te rappelle toutes les étapes de cette aventure : ");
                            console.log(table.toString());
                            break;
                        }
                        else if (choice == "B") {
                            table.push(" Tu es resté dans les mines, ce choix à causé ta mort... THE END ");
                            console.log(" Tu es resté dans les mines. Le Balrog étant tombé : les orques te pourchasse et tu reçoit une flèche. En mourant, tu vois défiler toutes les étapes de cette aventure :");
                            console.log(table.toString());
                            break;
                        }

                    }
                    else if (choice == "B") {
                        table.push(" Sur la route pour le Mordor, une forte tempête de neige s'abbat sur vous et tu as décidé de passer par les mines de la Moria");
                        // question 7
                        choice = prompt(`Tu as décidé de passer par les mines.\n La porte s'effondre, tu n'as plus qu'une seule issue mais les orques ont envahis les mines et ont réveillé le Balrog.\n Gandalf tente de l'arrêter sur le pont mais il tombe avec lui et vous lance une derniere parole " Fuyez pauvre fou". \n ${playername} Veux-tu fuir ou rester ?\n Réponse A : Tu fuis\n Réponse B : tu reste\n`);
                    }
                    while (choice != "A" && choice != "B") {
                        choice = prompt(" Mauvaise réponse mais tous ceux qui errent ne sont pas perdus. Choisis entre A ou B");
                    }
                    if (choice == "A") {
                        table.push(" Tu as fui les mines, te voilà hors de danger pour le moment. En attendant la suite de l'aventure... \n TO BE CONTINUED...");
                        console.log(" Tu as fui les mines et tu as trouvé la sortie.\n Hors de danger, tu te rappelle toutes les étapes de cette aventure : ");
                        console.log(table.toString());
                        break;
                    }
                    else if (choice == "B") {
                        table.push(" Tu es resté dans la mines, ce choix à causé ta mort... THE END ");
                        console.log(" Tu es resté dans la mines. Le Balrog étant tombé : les orques te pourchasse et tu reçoit une flèche. En mourant, tu vois défiler toutes les étapes de cette aventure :");
                        console.log(table.toString());
                        break;
                    }
                }
                else if (choice == "B") {
                    console.log("Tu as décidé ne pas faire parti de la communauté de l'Anneau. Tu retourne à Cul-de-Sac en espérant vivre une petite vie tranquille. Fin.");
                    break;
                }
            }
            else if (choice == "B") {
                console.log(" Tu ne suis pas Grand-Pas. Les Nazgûls t'ont retrouvé et tué dans ton sommeil. L'Anneau reviens à Sauron. La terre du milieu n'est plus que ténèbre. Fin.");
                break;
            }
        }
    }
    // Réponse 1B
    else if (choice == "B") {
        choice = prompt(" Même la plus petite personne peut changer le cours de l'avenir. Es-tu sûr de refuser cette aventure ? \n Réponse A Non \n Réponse B Oui \n");

        if (choice == "B") {
            console.log(" Infidèle est celui qui dit adieu quand la route s'assombrit. FIN");
            break;
        }
    }
}







