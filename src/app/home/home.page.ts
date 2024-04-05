import { Component } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private database: Database) { }

  temperature: number = 0;
  adjustedTemperature: number = 0;

  ngOnInit(): void {
    this.subscribeToDatabaseChanges();
  }

  private subscribeToDatabaseChanges(): void {
    const temperaturaRoute = ref(this.database, "/termometro/temperatura");
    object(temperaturaRoute).subscribe(value => {
      this.temperature = value.snapshot.val();
      this.adjustedTemperature = this.adjustTemperature(this.temperature);
    });
  }

  adjustTemperature(temp: number): number {
    if (temp < 0) {
      return 0;
    } else if (temp > 100) {
      return 100;
    } else {
      return temp;
    }
  }
}
