import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import * as M from 'materialize-css'

@Directive({
  selector: '[matSelect]'
})
export class MatSelectDirective implements AfterViewInit, OnDestroy {
  private _instance: M.FormSelect | undefined
  private _options: Partial<M.FormSelectOptions> = {}

  @Input('options')
  set options(v: Partial<M.FormSelectOptions> | undefined) {
    if (!v) return
    this._options = { ...this._options, ...v }
  }
  constructor(
    private $elRef: ElementRef<HTMLSelectElement>
  ) {

  }

  init() {
    setTimeout(() => this._instance = M.FormSelect.init(this.$elRef.nativeElement, this._options), 300)
  }

  ngAfterViewInit(): void {
    this.init()
  }

  ngOnDestroy(): void {
    this._instance?.destroy()
  }

}