import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CitySearhTpldrivenComponent } from './city-searh-tpldriven.component'

describe('CitySearhTpldrivenComponent', () => {
  let component: CitySearhTpldrivenComponent
  let fixture: ComponentFixture<CitySearhTpldrivenComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearhTpldrivenComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearhTpldrivenComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
