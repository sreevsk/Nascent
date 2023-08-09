import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { EmailService } from '../email.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {
  jobItemsMap;
  currentJobInfo: any;
  nameSet: any;
  nameSetKeys: any;
  requiredForm: FormGroup;
  notificationModalPositive;
  @ViewChild('fileInput') fileInput: any;


  constructor(private route: ActivatedRoute, private sharedDataService: SharedDataService,
    private emailService: EmailService, private fb: FormBuilder, private modalService: NgbModal) {
    this.jobItemsMap = sharedDataService.getJobItemsMap();
    this.nameSet = sharedDataService.getJobPageNameSet();
    this.nameSetKeys = Object.keys(this.nameSet);
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      coverLetter: ['', [Validators.required, Validators.minLength(5)]],
      agreementChecked: [false, [Validators.requiredTrue]],
      resume: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.currentJobInfo = this.jobItemsMap.get(id);
      console.log('test ' + this.currentJobInfo.details['jobResponsibilities']);
      console.log();
    });
  }


  markFormFieldsAsTouched() {
    Object.values(this.requiredForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  sendEmail(content) {
    if (!this.requiredForm.valid) {
      this.markFormFieldsAsTouched();
    } else {
      const subject = 'Apply for this Position - Jobs Page';
      const bodyHtml = '<p> Name : ' + this.requiredForm.value.name + '</p> <br>'
        + '<p> Mail : ' + this.requiredForm.value.email + '</p> <br>'
        + '<p> Telephone : ' + this.requiredForm.value.phoneNumber + '</p> <br>'
        + '<p> Cover Letter : ' + this.requiredForm.value.coverLetter + '</p> <br>'
        + '<p> Job ID : ' + this.currentJobInfo.details["jobId"] + '</p> <br>'
        + '<p> Job Title : ' + this.currentJobInfo.details["jobTitle"] + '</p> <br>';

      const attachmentFile = this.fileInput.nativeElement.files[0];

      this.emailService
        .sendEmail(subject, bodyHtml, attachmentFile)
        .subscribe(
          (response) => {
            if (response.success) {
              this.openModal(content, true);
            }
            else {
              this.openModal(content, false);

            }
            console.log('Email sent successfully' + JSON.stringify(response));
          },
          (error) => {
            this.openModal(content, false);
            console.log('Error sending email' + error);
          }
        );
    }
  }


  openModal(content, isPositive) {
    this.notificationModalPositive = isPositive;
    this.modalService.open(content, { windowClass: 'modal-mini', centered: true }).result.then((result) => {
      console.log(`Closed with: ${result}`);
      if (this.notificationModalPositive) {
        this.requiredForm.reset();
      }
    }, (reason) => {
      if (this.notificationModalPositive) {
        this.requiredForm.reset();
      }
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
