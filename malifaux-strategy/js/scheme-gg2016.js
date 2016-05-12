var set = 'gaining grounds 2016';
var type = 'scheme';
var lang = 'eng';
var cards = {
	'always' : {
		name: 'Convict Labor',
		text:'Keep that chain gang on task!',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'At the end of every Turn after the first, if this Crew has at least three Scheme Markers within 2" of the Centerline of the board which do not have an enemy model or another friendly Scheme Marker within 2" of them, this Crew scores 1 <b>VP</b>. <p>These Scheme Markers may still be used to score <b>VP</b> from other Schemes during Turns in which they were not used to score <b>VP</b> for Convict Labor (but they may not be used to Score <b>VP</b> from both Convict Labor and a different Scheme during a single Turn.)</p>',
	},
	'doubles' : {
		name: 'Take Prisoner',
		text:'Sometimes, you just have to keep someone alive for questioning.',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'When you choose this Scheme, note down an enemy model. At the end of the game, if this Crew has at least one non-Peon model engaged with the noted enemy model, this Crew earns 2 <b>VP</b>. <p>If this Crew has at least one non-Peon model engaged with the noted enemy model and there are no other enemy models within 3" of the noted model, this Crew earns 1 additional <b>VP</b>.</p>',
	},
	'masks' : {
		name: 'Exhaust Their Forces',
		text:'Sometimes wearing them out is good enougth.',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'All non-Peon models in this Crew may target a non-Peon enemy model within 1" with an Interact Action. If the target has already activated this Turn, it is a (2) Action, else it is a (1) Action. Give the target of the Interact Action the following Condition for the rest of the game: <p><b>Exhausted</b>: This model gains the following Action: "<b>(1) Shake It Off:</b> Remove the <b>Exhausted</b> Condition from this model. This Action may not be taken while this model is engaged." No other Action or Ability can remove this Condition.</p> The first time an enemy model gains the <b>Exhausted</b> Condition, reveal this Scheme. At the end of every Turn after the first, this Crew may end the Exhausted Condition on one enemy model in play to gain 1 <b>VP</b>.',
	},
	'crows' : {
		name: 'Hunting party',
		text:'Hunt them down and make them pay.',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'At the end of every Turn after the first, score 1 <b>VP</b> if at least one enemy Minion or Peon model was killed by one of this Crew\'s Enforcer or Henchmen models. <p>At the end of every Turn after the first, if the enemy Crew has no Minion or Peon models in play, score 1 <b>VP</b>. No more than 1 <b>VP</b> per Turn may be scored from this Scheme.</p>',
	},
	'tomes' : {
		name: 'leave your mark',
		text:'Let the world know you were here.',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'At the end of every Turn after the first, this Crew may remove one of its Scheme Markers which is on the opponent\'s half of the board, not within 6" of the Centerline, and not within 4" of a non-Peon enemy model to score 1 <b>VP</b>.',
	},
	'rams' : {
		name: 'show of force',
		text:'Sometimes showing up well-armed is all you need to put down a riot.',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'At the end of every Turn after the first, count the number of face-up Upgrades with a printed cost greater than 0 attached to each non-Master model within 6" of the center of the board for each Crew. Upgrades which began the game attached to a Master do not count toward this total. <p>If this Crew has at least one qualifying Upgrade and has a number of qualifying Upgrades equal to or exceeding the opposing Crew\'s number of qualifying Upgrades, this crew scores 1 <b>VP</b>.</p>',
	},
	'1' : {
		name: 'covert breakthrough',
		text:'The Crew must push into enemy territory, but keep quiet about it!',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'At the end of the game, this Crew earns 1 <b>VP</b> for each of its Scheme Markers within 6" of the enemy Deployment Zone.',
	},
	'2' : {
		name: 'undercover entourage',
		text:'It is vital that an important person be secretly delivered into enemy territory.',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'When you choose this Scheme, note down one of this Crew\'s Master or Henchmen models. At the end of the game, if the chosen model is in the opponent\'s half of the table, this Crew earns 1 <b>VP</b>. <p>If the chosen model is in the enemy Deployment Zone at the end of the game, this Crew earns 1 additional <b>VP</b>.</p><p>if the chosen model is in the opponent\'s half of the table at the end of the game and has half or more of its Wounds remaining, this Crew earns 1 additional <b>VP</b>.</p>',
	},
	'3' : {
		name: 'neutralize the leader',
		text:'Cut off the head, and the snake will die.',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'The first time the enemy Leader is reduced below half of their starting Wounds, gain 1 <b>VP</b>. <p>The first time the enemy Leader leaves play, score 2 <b>VP</b>.</p>',
	},
	'4' : {
		name: 'catch and release',
		text:'The flora and fauna of Malifaux must be catalogued!',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'All non-Peon models in this Crew may target a non-Peon enemy model within 1" with a (1) Interact Action to give the target the following Condition for the rest of the game: <p><b>Tagged</b>: this model gains the following Action:"<b>(2) Rip It Out:</b> Remove this Condition from this model. This Action may not be taken while this model is engaged." No other Action or Ability can remove this Condition.</p> <p>The first time an enemy model gains the <b>Tagged</b> Condition, reveal this Scheme. At the end of every Turn, this Crew earns 1 <b>VP</b> if at least two enemy models in play have <b>Tagged</b> Condition.</p>',
	},
	'5' : {
		name: 'frame for murder',
		text:'Convince the enemy leader to kill some poor sap!',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'When you choose this Scheme, note one of this Crew\'s non-Peon model as the "sucker". If the chosen "sucker" model is killed or sacrificed by an enemy model, score 1 <b>VP</b>. <p>If the enemy model was a Master or Henchmen, score 1 additional <b>VP</b>.</p> If this Scheme was accomplished on before Turn 3, score 1 additional <b>VP</b>.',
	},
	'6' : {
		name: 'detonate the charges',
		text:'It\'s time to blow some stuff up!',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'Once per game, at the end of any Turn, this Crew may reveal this Scheme and earn 1 <b>VP</b> for each enemy model that is within 3" of at least one of this Crew\'s Scheme Markers. Then, remove all of this Crew\'s Scheme Markers which are within 3" of an enemy model. <p>If only one Scheme Marker is removed in this way, this Crew can only score a maximum of 2 <b>VP</b> from this Scheme.</p>',
	},
	'7' : {
		name: 'set up',
		text:'Get the enemy right where you want them and then spring your trap!',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'When you choose this Scheme, note down an enemy Master, Henchmen, or Enforcer model. <p>Once per game, at the end of any Turn, this Crew may reveal this Scheme to score a number of <b>VP</b> equal to the number of this Crew\'s Scheme Markers within 4" of the noted model. Then remove all of this Crew\'s Scheme Markers within 4" of the noted model.</p>',
	},
	'8' : {
		name: 'search the ruins',
		text:'The ruins dotting Malifaux\'s surface are ancient and terrible; there is no telling what you may learn from their excavation.',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'At the end of the game, this Crew earns 2 <b>VP</b> if it has 3 or more Scheme Markers within  6" of the Center of the board. <p>If at least two of those Scheme Markers are on the opponent\'s half of the table, earn 1 additional <b>VP</b>.</p> Scheme Markers which are within 2" of one or more other friendly Scheme Markers do not count towards this Scheme.',
	},
	'9' : {
		name: 'mark for death',
		text:'It\'s always good to keep the slaughter organized.',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'All non-Peon models in this Crew may target a non-Peon enemy model they are engaged with with a (1) Interact Action to give the target the following Condition for the rest of the game: <p>"<b>Marked</b>: This condition may not be removed or ended."</p> Reveal this Scheme once an enemy model gains the <b>Marked</b> condition. When an enemy model with the <b>Marked</b> Condition is reduced to 0 Wounds or leaves play, gain 1 <b>VP</b>.',
	},
	'10' : {
		name: 'public demonstration',
		text:'Make your voice heard!',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'When you choose this Scheme, secretly note down up to three Minion models in this Crew with a combined Soulstone Cost of at least 15. <p>Once per game, at the end of any Turn, this Crew may reveal this Scheme to score 1 <b>VP</b> for each of the noted models within 4" and LoS of an enemy Master, Henchman, or Enforcer.</p>',
	},
	'11' : {
		name: 'inspection',
		text:'Time to bust some doors and flip some beds!',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'At the end of every Turn after the first, this Crew scores 1 <b>VP</b> if it has at least one non-Peon model within 4" of where each end of the Centerline of the board meets the board edge (or corner).',
	},
	'12' : {
		name: 'a quick murder',
		text:'There is nothing like a quick murder to get things started!',
		setup:'This Scheme may not start revealed. Reveal this Scheme once this Crew has scored any <b>VP</b> from it.',
		special:'',
		vp:'When you choose this Scheme, note down the enemy model with the highest Soulstone Cost. If the multiple models are tied for the highest Soulstone Cost, then choose one of those models and note it down. <p>This Crew earns 2 <b>VP</b> if the noted model is killed or sacrificed before the end of the game.</p> If the noted enemy model is killed or sacrificed on or before Turn 3, earn 1 additional <b>VP</b>.',
	},
	'13' : {
		name: 'occupy their turf',
		text:'Take everything they have.',
		setup:'This Scheme may not start revealed.',
		special:'',
		vp:'Once per game, at the end of any Turn, this Crew may reveal this Scheme to score a number of <b>VP</b> equal to the number of this Crew\'s Minion models on the enemy half of the board which are not within 10" of the Centerline.',
	},
}