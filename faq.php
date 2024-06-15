<!DOCTYPE html>
<html lang="en-us">

<head>
	<meta charset="utf-8">
	<title>NirVriksh - IT Solutions</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
	<meta name="description" content="FAQs | NirVriksh">
	<meta name="author" content="NirVriksh">
	<link rel="shortcut icon" href="images/NirVriksh.jpeg" type="image/x-icon">
	<link rel="icon" href="images/NirVriksh.jpeg" type="image/x-icon">

	<!-- # Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">

	<!-- # CSS Plugins -->
	<link rel="stylesheet" href="plugins/slick/slick.css">
	<link rel="stylesheet" href="plugins/font-awesome/fontawesome.min.css">
	<link rel="stylesheet" href="plugins/font-awesome/brands.css">
	<link rel="stylesheet" href="plugins/font-awesome/solid.css">

	<!-- # Main Style Sheet -->
	<link rel="stylesheet" href="css/style.css">
	<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P2JVEGZQ0R"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P2JVEGZQ0R');
</script>
</head>

<body>
    <?php 
      include 'header.php';
    ?>

	<div class="modal applyLoanModal fade" id="applyLoan" tabindex="-1" aria-labelledby="applyLoanLabel"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header border-bottom-0">
					<h4 class="modal-title" id="exampleModalLabel">How much do you need?</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form action="#!" method="post">
						<div class="row">
							<div class="col-lg-6 mb-4 pb-2">
								<div class="form-group">
									<label for="loan_amount" class="form-label">Amount</label>
									<input type="number" class="form-control shadow-none" id="loan_amount"
										placeholder="ex: 25000">
								</div>
							</div>
							<div class="col-lg-6 mb-4 pb-2">
								<div class="form-group">
									<label for="loan_how_long_for" class="form-label">How long for?</label>
									<input type="number" class="form-control shadow-none" id="loan_how_long_for"
										placeholder="ex: 12">
								</div>
							</div>
							<div class="col-lg-12 mb-4 pb-2">
								<div class="form-group">
									<label for="loan_repayment" class="form-label">Repayment</label>
									<input type="number" class="form-control shadow-none" id="loan_repayment" disabled>
								</div>
							</div>
							<div class="col-lg-6 mb-4 pb-2">
								<div class="form-group">
									<label for="loan_full_name" class="form-label">Full Name</label>
									<input type="text" class="form-control shadow-none" id="loan_full_name">
								</div>
							</div>
							<div class="col-lg-6 mb-4 pb-2">
								<div class="form-group">
									<label for="loan_email_address" class="form-label">Email address</label>
									<input type="email" class="form-control shadow-none" id="loan_email_address">
								</div>
							</div>
							<div class="col-lg-12">
								<button type="submit" class="btn btn-primary w-100">Get Your Loan Now</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<section class="section">
		<div class="container">
			<div class="row justify-content-center mb-5">
				<div class="col-lg-6">
					<div class="section-title text-center">
						<p class="text-primary text-uppercase fw-bold mb-3">Frequient Questions</p>
						<h1>Frequently Asked Questions</h1>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-9">
                  <div class="accordion shadow rounded py-5 px-0 px-lg-4 bg-white position-relative" id="accordionFAQ">
                    <!-- Question 1 -->
                    <div class="accordion-item p-1 mb-2">
                      <h2 class="accordion-header accordion-button h5 border-0 active"
                        id="heading-ebd23e34fd2ed58299b32c03c521feb0b02f19d9" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-ebd23e34fd2ed58299b32c03c521feb0b02f19d9" aria-expanded="true"
                        aria-controls="collapse-ebd23e34fd2ed58299b32c03c521feb0b02f19d9">What web design and
                        development services do you offer?
                      </h2>
                      <div id="collapse-ebd23e34fd2ed58299b32c03c521feb0b02f19d9"
                        class="accordion-collapse collapse border-0 show"
                        aria-labelledby="heading-ebd23e34fd2ed58299b32c03c521feb0b02f19d9" data-bs-parent="#accordionFAQ">
                        <div class="accordion-body py-0 content">We provide comprehensive web design and development services,
                          including custom website design, responsive development, and e-commerce solutions tailored to meet
                          your business goals.</div>
                      </div>
                    </div>
                    <!-- Question 2 -->
                    <div class="accordion-item p-1 mb-2">
                      <h2 class="accordion-header accordion-button h5 border-0 "
                        id="heading-a443e01b4db47b3f4a1267e10594576d52730ec1" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-a443e01b4db47b3f4a1267e10594576d52730ec1" aria-expanded="false"
                        aria-controls="collapse-a443e01b4db47b3f4a1267e10594576d52730ec1">What app development
                        services do you provide?
                      </h2>
                      <div id="collapse-a443e01b4db47b3f4a1267e10594576d52730ec1" class="accordion-collapse collapse border-0 "
                        aria-labelledby="heading-a443e01b4db47b3f4a1267e10594576d52730ec1" data-bs-parent="#accordionFAQ">
                        <div class="accordion-body py-0 content">Our app development services cover both iOS and Android
                          platforms. We specialize in creating user-friendly and feature-rich mobile applications that cater to
                          your specific requirements.</div>
                      </div>
                    </div>
                    <!-- Question 3 -->
                    <div class="accordion-item p-1 mb-2">
                      <h2 class="accordion-header accordion-button h5 border-0 "
                        id="heading-4b82be4be873c8ad699fa97049523ac86b67a8bd" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-4b82be4be873c8ad699fa97049523ac86b67a8bd" aria-expanded="false"
                        aria-controls="collapse-4b82be4be873c8ad699fa97049523ac86b67a8bd">How can you help with SEO &amp;
                        SMM?
                      </h2>
                      <div id="collapse-4b82be4be873c8ad699fa97049523ac86b67a8bd" class="accordion-collapse collapse border-0 "
                        aria-labelledby="heading-4b82be4be873c8ad699fa97049523ac86b67a8bd" data-bs-parent="#accordionFAQ">
                        <div class="accordion-body py-0 content">Our SEO &amp; SMM services focus on optimizing your online
                          presence. We implement strategic SEO techniques and social media marketing strategies to enhance
                          visibility, engagement, and brand awareness.</div>
                      </div>
                    </div>
                    <!-- Question 4 -->
                    <div class="accordion-item p-1 mb-2">
                      <h2 class="accordion-header accordion-button h5 border-0 "
                        id="heading-3e13e9676a9cd6a6f8bfbe6e1e9fc0881ef247b3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-3e13e9676a9cd6a6f8bfbe6e1e9fc0881ef247b3" aria-expanded="false"
                        aria-controls="collapse-3e13e9676a9cd6a6f8bfbe6e1e9fc0881ef247b3">Tell me about your DevOps
                        solutions.
                      </h2>
                      <div id="collapse-3e13e9676a9cd6a6f8bfbe6e1e9fc0881ef247b3" class="accordion-collapse collapse border-0 "
                        aria-labelledby="heading-3e13e9676a9cd6a6f8bfbe6e1e9fc0881ef247b3" data-bs-parent="#accordionFAQ">
                        <div class="accordion-body py-0 content">Our DevOps solutions streamline your development and operations
                          processes. We implement automation, continuous integration, and continuous delivery practices to
                          enhance efficiency and collaboration in your projects.</div>
                      </div>
                    </div>
                    <!-- Question 5 -->
                    <div class="accordion-item p-1 mb-2">
                      <h2 class="accordion-header accordion-button h5 border-0 "
                        id="heading-0c2f829793a1f0562fea97120357dd2d43319164" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-0c2f829793a1f0562fea97120357dd2d43319164" aria-expanded="false"
                        aria-controls="collapse-0c2f829793a1f0562fea97120357dd2d43319164">How do you implement Machine
                        Learning in your services?
                      </h2>
                      <div id="collapse-0c2f829793a1f0562fea97120357dd2d43319164" class="accordion-collapse collapse border-0 "
                        aria-labelledby="heading-0c2f829793a1f0562fea97120357dd2d43319164" data-bs-parent="#accordionFAQ">
                        <div class="accordion-body py-0 content">Our Machine Learning services leverage advanced algorithms and
                          data analysis techniques to provide intelligent solutions. Whether it's data prediction, pattern
                          recognition, or decision-making, we integrate ML to enhance your applications.</div>
                      </div>
                    </div>
                    <!-- Question 6 -->
                    <div class="accordion-item p-1 mb-2">
                      <h2 class="accordion-header accordion-button h5 border-0 "
                        id="heading-8fe6730e26db16f15763887c30a614caa075f518" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-8fe6730e26db16f15763887c30a614caa075f518" aria-expanded="false"
                        aria-controls="collapse-8fe6730e26db16f15763887c30a614caa075f518">Tell me about your AI
                        services.
                      </h2>
                      <div id="collapse-8fe6730e26db16f15763887c30a614caa075f518" class="accordion-collapse collapse border-0 "
                        aria-labelledby="heading-8fe6730e26db16f15763887c30a614caa075f518" data-bs-parent="#accordionFAQ">
                        <div class="accordion-body py-0 content">Our AI services encompass a range of solutions from natural
                          language processing to computer vision. We develop intelligent systems that learn and adapt, enhancing
                          your applications with advanced capabilities and automation.</div>
                      </div>
                    </div>
                  </div>
                </div>
			</div>
		</div>
	</section>

	<?php 
      include 'footer.php';
    ?>
    
	<!-- # JS Plugins -->
	<script src="plugins/jquery/jquery.min.js"></script>
	<script src="plugins/bootstrap/bootstrap.min.js"></script>
	<script src="plugins/slick/slick.min.js"></script>
	<script src="plugins/scrollmenu/scrollmenu.min.js"></script>

	<!-- Main Script -->
	<script src="js/script.js"></script>

</body>

</html>