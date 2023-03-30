import { Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { IconType } from '../icons/icons.component';

@Component({
  selector: 'app-input-controller',
  templateUrl: './input-controller.component.html',
  styleUrls: ['./input-controller.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
  host: {
    style: 'display: contents',
  },
})
export class InputControllerComponent implements OnInit {
  @Input()
  isEnabled: boolean | null = null;

  @Input()
  name: string = '';

  @Input()
  type: string = 'text';

  @Input()
  value: string | null = null;

  @Input()
  inFormGroupName: string = '';

  @Input()
  hasChipTags: boolean = false;

  @Input()
  editable: boolean = false;

  @Input()
  removable: boolean = true;

  @Input()
  isYellow: boolean = false;

  @Input()
  isUsingScroll: boolean = false;

  @Input()
  guarantorType: string = 'none'; //none, limited, full

  chipTags: { name: string }[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  dash: IconType = IconType.Dash;

  @Input()
  public inOnChange: ((event: any) => void) | undefined;

  onChange(event: any) {
    this.inOnChange?.(event.target.value);
  }

  ngOnInit(): void {}

  getIsEnabled(): boolean {
    return this.isEnabled === null || !!this.isEnabled;
  }

  add(event: MatChipInputEvent): void {
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.chipTags.push({ name: value.trim() });
    }

    event.chipInput.clear();
  }

  remove(chipTag: { name: string }): void {
    const index = this.chipTags.indexOf(chipTag);

    if (index >= 0) {
      this.chipTags.splice(index, 1);
    }
  }
}
