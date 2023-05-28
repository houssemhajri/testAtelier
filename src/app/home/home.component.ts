import { Component } from '@angular/core';
import { AppServicesService } from '../../Core/Services/app-services.service';
import Chart from 'chart.js/auto';
import { Player } from '../../Core/Models/player.Modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listPlayers: Array<Player> = [];
  showDetails: boolean = false;
  searchInput: any = '';
  searchResult: any = [];
  selectedPlayer: any;
  constructor(public appServices: AppServicesService) {}

  ngOnInit() {
    this.getPlayers();
  }
  filterTatble(event: any) {
    let value = event.target.value;
    this.searchResult = [];
    if (value.length == 0) {
      this.listPlayers.map((player: Player) => {
        this.searchResult.push(player);
        this.constructCanva();
      });
    } else {
      this.listPlayers.map((player: Player) => {
        if (
          player.firstname?.toLowerCase().indexOf(value.toLowerCase()) != -1 ||
          player.lastname?.toLowerCase().indexOf(value.toLowerCase()) != -1
        ) {
          this.searchResult.push(player);
        }
        this.constructCanva();
      });
    }
  }
  getPlayers() {
    this.appServices.getPlayers().subscribe(
      (data: any) => {
        this.listPlayers = data.players;
        this.listPlayers.map((player: Player) =>
          this.searchResult.push(player)
        );
        this.constructCanva();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showPopDetails(player: any) {
    this.selectedPlayer = player;
    this.showDetails = true;
  }
  closeModal() {
    this.showDetails = false;
  }
  constructCanva() {
    setTimeout(() => {
      for (let player of this.searchResult) {
        const canvas = <HTMLCanvasElement>(
          document.getElementById(player.firstname)
        );
        const ctx = canvas.getContext('2d');
        player.stat ? player.stat.destroy() : '';
        if (ctx) {
          var counts: any = {};
          for (const num of player.data.last) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
          }
          player.stat = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['lost', 'won'],
              datasets: [
                {
                  backgroundColor: ['#0000008f', '#F2753B'],
                  data: [counts[0], counts[1]],
                },
              ],
            },
            options: {
              responsive: false,
              maintainAspectRatio: false,
            },
          });
        }
      }
    }, 1000);
  }
}
