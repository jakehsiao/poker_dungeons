import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Client } from 'boardgame.io/react';
import { PluginPlayer } from 'boardgame.io/plugins'

var SUIT_IMGS = [];

function get_random_card(ctx){
  let cards = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"];
  let suits = ["c", "d", "h", "s"];
  return [ctx.random.Shuffle(cards)[0], ctx.random.Shuffle(suits)[0]];
}

function boss_move(G, ctx){
  let actions = [
  // Single damage
  (G,ctx) => {G.players[ctx.random.Shuffle(Object.keys(G.players))[0]].hp -= 6;},
  // AOE
  (G,ctx) => {for (let p in G.players) G.players[p].hp -= 3;},
  // Drop cards
  (G,ctx) => {for (let i=0;i<2;i++) G.hand.pop();},
  // Exhaust
  (G,ctx) => {for (let i=0;i<2;i++) G.players[ctx.random.Shuffle(Object.keys(G.players))[0]].exhausted=true;}
  ];

  ctx.random.Shuffle(actions)[0](G, ctx);
}

// Warrior, Militia, Medic, Mage, Assassin

const Players = {
  战士: {
    hp: 15,
    i: 0,
    j: 1,
    skills:[
      {
        name: "普通攻击",
        desc: "造成2点伤害，如果使用的是高牌，则伤害+2",
        effect(G, ctx, card){
          let damage = 2;
          if (["J", "Q", "K", "A"].includes(card[0])){
            damage += 2;
          }
          G.bossHP -= damage;
        }
      },
      {
        name: "力量召唤",
        desc: "检索1张高牌",
        effect(G, ctx, card){
          G.hand.push([ctx.random.Shuffle(["J", "Q", "K", "A"])[0], ctx.random.Shuffle(["c", "d", "h", "s"])[0]]);
        }
      }
    ]

  },
  民兵: {
    hp: 12,
    i: 1,
    j: 0,
    skills:[
      {
        name: "普通攻击",
        desc: "造成2点伤害，如果使用的是高牌，则伤害+2",
        effect(G, ctx, card){
          let damage = 2;
          if (["J", "Q", "K", "A"].includes(card[0])){
            damage += 2;
          }
          G.bossHP -= damage;
        }
      },
      {
        name: "鼓舞",
        desc: "(限草花和方片)摸2张牌",
        effect(G, ctx, card){
          if (["c", "d"].includes(card[1])){
            for (let i=0; i<2; i++) G.hand.push(get_random_card(ctx));
          }
        }
      }
    ],

  },
  治疗兵: {
    hp: 10,
    i: 1,
    j: 2,
    skills: [
      {
        name: "治疗",
        desc: "治疗血量最低的队友3点血量",
        effect(G, ctx, card){
          let cured_player = Object.keys(G.players)[0]; // TODO: change this
          let lowest_hp = 1000;
          for (let p in ctx.random.Shuffle(G.players)){
            if (G.players[p].hp < lowest_hp){
              lowest_hp = G.players[p].hp
              cured_player = p;
            }
            
          }

          G.players[cured_player].hp += 3;
        }
      },
      {
        name: "兴奋剂",
        desc: "重置1个队友",
        effect(G, ctx, card){
          for (let p of ctx.random.Shuffle(Object.keys(G.players))){
            if (G.players[p].exhausted){
              G.players[p].exhausted = false;
              return;
            }
          }

        }
      }
    ],

  },
  见习法师: {
    hp: 10,
    i: 2,
    j: 0,
    skills: [
      {
        name: "元素波动",
        desc: "(限红桃和黑桃)造成2点伤害，进行1次判定，如果是红色，再造成2点伤害；如果是黑色，重置自己",
        effect(G, ctx, card){
          if (["h", "s"].includes(card[1])){
            let damage = 2;
            let judge = get_random_card(ctx);
            if (["d", "h"].includes(judge[1])){
              damage += 2;
            }
            else{
              G.players.见习法师.exhausted = false;
            }
            G.bossHP -= damage;
          }

        }

      }
    ]

  },
  刺客: {
    hp: 10,
    i: 2,
    j: 2,
    skills:[
      {
        name: "快速攻击",
        desc: "造成2点伤害，如果使用的牌点数在2-5之间，则重置自己",
        effect(G, ctx, card){
          let damage = 2;
          if (["2", "3", "4", "5"].includes(card[0])){
            G.players.刺客.exhausted = false;
          }
          G.bossHP -= damage;
        }
      },
      {
        name: "疾跑",
        desc: "(限高牌)检索2张点数为2到5的牌",
        effect(G, ctx, card){
          if(["J", "Q", "K", "A"].includes(card[0])){
          for(let i=0;i<2;i++){
            G.hand.push([ctx.random.Shuffle(["2", "3", "4", "5"])[0], ctx.random.Shuffle(["c", "d", "h", "s"])[0]]);}
          }
        }
      }
    ]

  },
}


const PokerDungeons = {
  setup: (ctx) => {
    let G = {};

    G.bossHP = 100;

    G.players = Players;
    for (let p in G.players){
      G.players[p].exhausted = false;
    }

    G.hand = [];
    for (let i=0; i<5; i++){
      G.hand.push(get_random_card(ctx));
    }

    return G;
  },

  moves: {
    useSkill(G, ctx, cardIndex, playerIndex, skillIndex){
      if (!(G.players[playerIndex].exhausted || G.players[playerIndex].hp <= 0)){
        let card = G.hand.splice(cardIndex, 1)[0];
        G.players[playerIndex].exhausted = true;

        G.players[playerIndex].skills[skillIndex].effect(G, ctx, card);
      }

    },

  },

  turn: {
    onEnd(G, ctx){
      if (G.bossHP <= 0){
        alert("你赢了！");
      }

      for (let p in G.players){
        G.players[p].exhausted = false;
      }

      G.hand = [];
      for (let i=0; i<5; i++){
          G.hand.push(get_random_card(ctx));
        }

      boss_move(G, ctx);
      

    },
  }

};

class BossBoard extends React.Component{

  render() {
    return (
      <div className="boss-board">
        <p>Boss HP: {this.props.bossHP}</p>
      </div>
    )
  }
}

class PlayerCell extends React.Component{

  render() {
    let player = undefined;

    for (let p in this.props.players){
      if (this.props.players[p].i == this.props.i && this.props.players[p].j == this.props.j){
        player = {
          name: p,
          ...this.props.players[p]
        };
      }
    }
    return player?(
      <div 
      className="player-cell" 
      style={{borderColor: (player.exhausted || player.hp <= 0)?"#FF0000":"#000000"}}
      onClick={()=>{
        let contents = "";
        for (let skill of player.skills){
          console.log(skill);
          contents += skill.name;
          contents += ":";
          contents += skill.desc;
          contents += "\n";
        }
        alert(contents);
      }}
      >
        <p>{player.name}</p>
        <p>HP: {player.hp}</p>
      </div>
    ):
    (
      <div className="player-cell"></div>
    )
  }
}

class Controller extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      current_branch: "main",
      previous_branch: "main",
    };

    this.action = {};

    this.set_branch = this.set_branch.bind(this); // Use the quickest developming method
  }

  set_branch(branch) {
    this.setState({
        previous_branch: this.state.current_branch,
        current_branch: branch,
    });
}

  render() { //TODO: reconstruct this module
    if (this.state.current_branch == "main"){
      return (<div className="controller-row">{this.props.hand.map(
        (card, idx) => (
            <button
            onClick={() => {
              this.action.card = idx;
              this.set_branch("player");
            }}>
            {card[0]}<img 
            src={"https://www.bridgebum.com/"+card[1]+".gif"}
            style={{height:"20px",}}
            ></img>
            </button>
        )
      )}</div>)
    }

    else if (this.state.current_branch == "player"){
      return (
        <div>
          {Object.keys(this.props.players).map(
            (p) => (
              <button onClick={() => {
                this.action.player = p;
                //this.props.execute(this.state.card, this.state.player);
                this.set_branch("skills");
              }}>
              {p}
              </button> 
            )
          )}
        </div>
      )
    }

    else if (this.state.current_branch == "skills"){
      return (
        <div>
          {this.props.players[this.action.player].skills.map(
            (skill, idx) => (
              <button 
              onClick={() => {
                this.action.skill = idx;
                this.props.execute(this.action.card, this.action.player, this.action.skill);
                this.set_branch("main");
              }}>
              {skill.name}
              </button> 
            )
          )}
        </div>
      );
    }
  }




}


class Board extends React.Component{

  render() {
    let tbody = [];

    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        cells.push(
          <td>
            <PlayerCell i={i} j={j} players={this.props.G.players} />
          </td>
        );
      }
      tbody.push(<tr>{cells}</tr>);
    }

    return(
    <div>
      <BossBoard bossHP={this.props.G.bossHP}/>
      <table><tbody>{tbody}</tbody></table>
      <Controller 
      players={this.props.G.players} 
      hand={this.props.G.hand}
      execute={this.props.moves.useSkill}
      />
      <button 
      className="controller-button"
      onClick={this.props.events.endTurn}
      >结束回合</button>
    </div>
    );

  }

}


const App = Client({
  game: PokerDungeons,
  numPlayers: 1,
  board: Board,
})

export default App;
